import { Router } from "express"
import { CreateAddressController } from "./Controllers/addresses/CreateAddressController"
import { DeleteAddressController } from "./Controllers/addresses/DeleteAddressController"
import { GetAllAddressesController } from "./Controllers/addresses/GetAllAddressesController"
import { LoadAddressByIdController } from "./Controllers/addresses/LoadAddressByIdController"
import { UpdateAddressController } from "./Controllers/addresses/UpdateAddressController"
import { CreateCategoryController } from "./Controllers/categories/CreateCategoryController"
import { DeleteCategoryController } from "./Controllers/categories/DeleteCategoryController"
import { GetAllCategoriesController } from "./Controllers/categories/GetAllCategoriesController"
import { LoadCategoryByIdController } from "./Controllers/categories/LoadCategoryByIdController"
import { UpdateCategoryController } from "./Controllers/categories/UpdateCategoryController"
import { CreateCityController } from "./Controllers/cities/CreateCityController"
import { DeleteCityController } from "./Controllers/cities/DeleteCityController"
import { GetAllCitiesController } from "./Controllers/cities/GetAllCitiesController"
import { LoadCityByIdController } from "./Controllers/cities/LoadCityByIdController"
import { UpdateCityController } from "./Controllers/cities/UpdateCityController"
import { CreateClientController } from "./Controllers/clients/CreateClientController"
import { DeleteClientController } from "./Controllers/clients/DeleteClientController"
import { GetAllClientsController } from "./Controllers/clients/GetAllClientsController"
import { LoadClientByIdController } from "./Controllers/clients/LoadClientByIdController"
import { UpdateClientController } from "./Controllers/clients/UpdateClientController"
import { CreateProductController } from "./Controllers/products/CreateProductController"
import { DeleteProductController } from "./Controllers/products/DeleteProductController"
import { GetAllProductsController } from "./Controllers/products/GetAllProductsController"
import { LoadProductByIdController } from "./Controllers/products/LoadProductByIdController"
import { UpdateProductController } from "./Controllers/products/UpdateProductController"
import { CreateRequestController } from "./Controllers/requests/CreateRequestController"
import { DeleteRequestController } from "./Controllers/requests/DeleteRequestController"
import { GetAllRequestsController } from "./Controllers/requests/GetAllRequestsController"
import { LoadRequestByIdController } from "./Controllers/requests/LoadRequestByIdController"
import { UpdateRequestController } from "./Controllers/requests/UpdateRequestController"
import { CreateRoleController } from "./Controllers/roles/CreateRoleController"
import { DeleteRoleController } from "./Controllers/roles/DeleteRoleController"
import { GetAllRolesController } from "./Controllers/roles/GetAllRolesController"
import { LoadRoleByIdController } from "./Controllers/roles/LoadRoleByIdController"
import { UpdateRoleController } from "./Controllers/roles/UpdateRoleController"
import { CreateStateController } from "./Controllers/states/CreateStateController"
import { DeleteStateController } from "./Controllers/states/DeleteStateController"
import { GetAllStatesController } from "./Controllers/states/GetAllStatesController"
import { LoadStateByIdController } from "./Controllers/states/LoadStateByIdController"
import { UpdateStateController } from "./Controllers/states/UpdateStateController"
import { CreateUserController } from "./Controllers/users/CreateUserController"
import { DeleteUserController } from "./Controllers/users/DeleteUserController"
import { GetAllUsersController } from "./Controllers/users/GetAllUsersController"
import { LoadUserByIdController } from "./Controllers/users/LoadUserByIdController"
import { LoginController } from "./Controllers/users/LoginController"
import { MeController } from "./Controllers/users/MeController"
import { UpdateUserController } from "./Controllers/users/UpdateUserController"

const routes = Router()

routes.post("/roles", new CreateRoleController().handle)
routes.get("/roles", new GetAllRolesController().handle)
routes.delete("/roles/:id", new DeleteRoleController().handle)
routes.put("/roles/:id", new UpdateRoleController().handle)
routes.get("/roles/:id", new LoadRoleByIdController().handle)

routes.post("/users", new CreateUserController().handle)
routes.get("/users", new GetAllUsersController().handle)
routes.delete("/users/:id", new DeleteUserController().handle)
routes.put("/users/:id", new UpdateUserController().handle)
routes.get("/users/:id", new LoadUserByIdController().handle)
routes.post('/signin', new LoginController().handle)
routes.get('/me', new MeController().handle)


routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)
routes.get("/categories/:id", new LoadCategoryByIdController().handle)

routes.post("/states", new CreateStateController().handle)
routes.get("/states", new GetAllStatesController().handle)
routes.delete("/states/:id", new DeleteStateController().handle)
routes.put("/states/:id", new UpdateStateController().handle)
routes.get("/states/:id", new LoadStateByIdController().handle)

routes.post("/cities", new CreateCityController().handle)
routes.get("/cities", new GetAllCitiesController().handle)
routes.delete("/cities/:id", new DeleteCityController().handle)
routes.put("/cities/:id", new UpdateCityController().handle)
routes.get("/cities/:id", new LoadCityByIdController().handle)

routes.post("/products", new CreateProductController().handle)
routes.get("/products", new GetAllProductsController().handle)
routes.delete("/products/:id", new DeleteProductController().handle)
routes.put("/products/:id", new UpdateProductController().handle)
routes.get("/products/:id", new LoadProductByIdController().handle)

routes.post("/addresses", new CreateAddressController().handle)
routes.get("/addresses", new GetAllAddressesController().handle)
routes.delete("/addresses/:id", new DeleteAddressController().handle)
routes.put("/addresses/:id", new UpdateAddressController().handle)
routes.get("/addresses/:id", new LoadAddressByIdController().handle)

routes.post("/clients", new CreateClientController().handle)
routes.get("/clients", new GetAllClientsController().handle)
routes.delete("/clients/:id", new DeleteClientController().handle)
routes.put("/clients/:id", new UpdateClientController().handle)
routes.get("/clients/:id", new LoadClientByIdController().handle)

routes.post("/requests", new CreateRequestController().handle)
routes.get("/requests", new GetAllRequestsController().handle)
routes.delete("/requests/:id", new DeleteRequestController().handle)
routes.put("/requests/:id", new UpdateRequestController().handle)
routes.get("/requests/:id", new LoadRequestByIdController().handle)
export { routes }