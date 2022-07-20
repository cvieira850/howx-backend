import { City } from "../../entities/city";
import { Address } from "../../entities/address";

import { getRepository } from "typeorm";

type AddressRequest = {
  id: string;
  street: string;
  cep: string;
  district: string;
  number: number;
  complement: string;
  city_id: string;
}

export class UpdateAddressService {
  async execute({id, street, cep, district, number, complement, city_id} : AddressRequest) {
    const repo = getRepository(Address);
    const cityRepo = getRepository(City);
    const address = await repo.findOne(id);
    if(city_id) {
      const city = await cityRepo.findOne({id: city_id});
      if(!city) {
        return new Error('City does not exists');
      }
    }

    if(!address) {
      return new Error('Address does not exists');
    }

    address.cep = cep ? cep : address.cep;
    address.street = street ? street : address.street;
    address.city_id = city_id ? city_id : address.city_id;
    address.district = district ? district : address.district;
    address.number = number ? number : address.number;
    address.complement = complement ? complement : address.complement;

    await repo.save(address);

    return await repo.createQueryBuilder('addresses')
    .innerJoinAndSelect('addresses.city', 'city')
    .innerJoinAndSelect('city.state', 'state')
    .where("addresses.id = :id", {id})
    .getOne();
    
  }
}