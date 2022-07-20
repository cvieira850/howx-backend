import { City } from "../../entities/city";
import { Address } from "../../entities/address";

import { getRepository } from "typeorm";

type AddressRequest = {
  street: string;
  cep: string;
  district: string;
  number: number;
  complement: string;
  city_id: string;
}

type AddressReturn = {
  id: string;
  street: string;
  cep: string;
  district: string;
  number: number;
  complement: string;
  city: string;
  state: string;
}

export class CreateAddressService {
  async execute({street, cep, district, number, complement, city_id}: AddressRequest )  {
    const repo = getRepository(Address);
    const cityRepo = getRepository(City);
    
    const city = await cityRepo.createQueryBuilder("cities")
    .innerJoinAndSelect("cities.state", "state")
    .where("cities.id = :id", {id:city_id})
    .getOne();
  
    if(! city){
      return new Error('City does not exists');
    }

    if(await repo.findOne({street: street, number: number, complement: complement, district: district, cep: cep})) {
      return new Error('Address already exists');
    }
    
    const address = repo.create({
      street,
      cep,
      district,
      number,
      complement,
      city_id,
    })

    await repo.save(address)

    // return {
    //   id: address.id,
    //   street,
    //   cep,
    //   district,
    //   number,
    //   complement,
    //   city: city.name,
    //   state: city.state.uf
    // }

    return await repo.createQueryBuilder("addresses")
    .innerJoinAndSelect("addresses.city", "city")
    .innerJoinAndSelect("city.state", "state")
    .where("addresses.id = :id", {id:address.id})
    .getOne();
  }
}