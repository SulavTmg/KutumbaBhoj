import { createContext, FC, ReactNode, useContext } from "react";
import { CustomerRepository } from "../repositories/CustomerRepository";
import { CustomerService } from "../services/CustomerService";
import { FetchAPI } from "../api/FetchAPI";
import { AuthRepository } from "../repositories/AuthRepository";
import { AuthService } from "../services/AuthService";
import { EmployeeRepository } from "../repositories/EmployeeRepository";
import { OrderRepository } from "../repositories/OrderRepository";
import { ImageRepository } from "../repositories/ImageRepository";
import { RestaurantRepository } from "../repositories/RestaurantRepository";
import { MenuRepository } from "../repositories/MenuRepository";
import { EmployeeService } from "../services/EmployeeService";
import { OrderService } from "../services/OrderService";
import { ImgService } from "../services/ImgService";
import { RestaurantService } from "../services/RestaurantService";
import { MenuService } from "../services/MenuService";
import {
  IAuthRepository,
  IMenuRepository,
  IRepository,
} from "../types/repository";
import { Customer } from "../types/customer";
import { Employee } from "../types/employee";
import { Order } from "../types/order";
import { Restaurant } from "../types/restaurant";

const createServices = () => {
  const api = new FetchAPI();

  const customerRepository: IRepository<Customer, number> =
    new CustomerRepository(api);
  const employeeRepository: IRepository<Employee, number> =
    new EmployeeRepository(api);
  const orderRepository: IRepository<Order, number> = new OrderRepository(api);
  const restaurantRepository: IRepository<Restaurant, number> =
    new RestaurantRepository(api);
  const authRepository: IAuthRepository = new AuthRepository(api);
  const menuRepository: IMenuRepository = new MenuRepository(api);
  const imgRepository: ImageRepository = new ImageRepository(api);

  const customerService = new CustomerService(customerRepository);
  const employeeService = new EmployeeService(employeeRepository);
  const orderService = new OrderService(orderRepository);
  const restaurantService = new RestaurantService(restaurantRepository);
  const authService = new AuthService(authRepository);
  const imgService = new ImgService(imgRepository);
  const menuService = new MenuService(menuRepository);

  return {
    customerService,
    authService,
    employeeService,
    orderService,
    imgService,
    restaurantService,
    menuService,
  };
};

interface ServiceProps {
  customerService: CustomerService;
  authService: AuthService;
  employeeService: EmployeeService;
  orderService: OrderService;
  imgService: ImgService;
  restaurantService: RestaurantService;
  menuService: MenuService;
}

export const ServiceContext = createContext<ServiceProps | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
};

export const ServiceProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const services = createServices();

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};
