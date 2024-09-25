export interface ICustomerService<T, ID> {
  searchCustomer(query: string): Promise<void>;
  getCustomers(): Promise<void>;
  getCustomerById(id: ID): Promise<void>;
  addCustomer(data: T): Promise<unknown>;
  updateCustomer(data: T): Promise<unknown>;
  deleteCustomer(id: ID): Promise<number | undefined>;
}

export interface IEmployeeService<T, ID> {
  searchEmployee(query: string): Promise<void>;
  getEmployees(): Promise<void>;
  getEmployeeById(id: ID): Promise<void>;
  addEmployee(data: T): Promise<unknown>;
  updateEmployee(data: T): Promise<unknown>;
  deleteEmployee(id: ID): Promise<number | undefined>;
}

export interface IOrderService<T, ID> {
  searchOrder(query: string): Promise<void>;
  getOrders(): Promise<void>;
  getOrderById(id: ID): Promise<void>;
  addOrder(data: T): Promise<unknown>;
  updateOrder(data: T): Promise<unknown>;
  deleteOrder(id: ID): Promise<number | undefined>;
}

export interface IRestaurantService<T, ID> {
  searchRestaurant(query: string): Promise<void>;
  getRestaurants(): Promise<void>;
  getRestaurantById(id: ID): Promise<void>;
  addRestaurant(data: T): Promise<unknown>;
  updateRestaurant(data: T): Promise<unknown>;
  deleteRestaurant(id: ID): Promise<number | undefined>;
}

export interface IAuthService {
  login(credentials: { email: string; password: string }): Promise<void>;
  signUp(data: SignUp): Promise<unknown>;
  logout(): Promise<void>;
}

export interface IImageService {
  uploadImage(formdata: FormData): Promise<unknown>;
  getImages(): Promise<void>;
}

export interface IMenuService {
  getMenu(id: number): Promise<void>;
  getItem(id: number): Promise<void>;
  addCategory(menu: AddCategory): Promise<unknown>;
  addItem(data: AddItem): Promise<unknown>;
  updateItem(data: ItemDetails): Promise<unknown>;
  deleteItem(id: number): Promise<number | undefined>;
}
