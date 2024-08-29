import { FetchAPI } from "../api/FetchAPI";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { OrderRepository } from "../repositories/OrderRepository";
import { CustomerRepository } from "../repositories/CustomerRepository";
import { RestaurantRepository } from "../repositories/RestaurantRepository";
import { MenuRepository } from "../repositories/MenuRepository";
import { AccessRepository } from "../repositories/AccessRepository";
import { ImageRepository } from "../repositories/ImageRepository";
const api = new FetchAPI();
const employeeRepository = new EmployeeRepository(api);
const orderRepository = new OrderRepository(api);
const customerRepository = new CustomerRepository(api);
const restaurantRepository = new RestaurantRepository(api);
const menuRepository = new MenuRepository(api);
const accessRepository = new AccessRepository(api);
const imageRepository = new ImageRepository(api);
export {
  employeeRepository,
  orderRepository,
  customerRepository,
  restaurantRepository,
  menuRepository,
  accessRepository,
  imageRepository,
};
