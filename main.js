class Customer{
	constructor(name,company,number,address){
		this.name = name;
		this.company = company;
		this.number = number;
		this.address = address;
	}
}

class Performer{
	constructor(name,number,companyId){
		this.name = name;
		this.number = number;
		this.companyId = companyId;
	}
}

class Project{
	constructor(name,number,CustomerId){
		this.name = name;
		this.number = number;
		this.CustomerId = CustomerId;
	}
}

class ActiveProject{
	constructor(projectId,performerId){
		this.projectId = projectId;
		this.performerId = performerId;
	}
}

var Projects = new Array(0);
var Performers = new Array(0);
var Customers = new Array(0);
var ActiveProjects = new Array(0);

function add_Project(name, number, CustomerId) {
  if (find_Project(number) == undefined) {
    Projects.push(new Project(name, number, CustomerId));
    return;
  }
  console.log(
    "Error. Project " + number + " has already been created. It must be unique!"
  );
}
function add_Performer(name, number, companyId) {
  if (find_Performer(number) == undefined) {
    Performers.push(new Performer(name, number, companyId));
    return;
  }
  console.log(
    "Error. Performer " +
      number +
      " has already been created. It must be unique!"
  );
}
function add_Customer(name, company, number, address) {
  if (find_Customer(number) == undefined) {
    Customers.push(new Customer(name, company, number, address));
    return;
  }
  console.log(
    "Error.  " + number + " has already been created. It must be unique!"
  );
}
function add_ActiveProject(projectId, performerId) {
  if (find_Project(projectId) == undefined) {
    console.log("Error. Project " + projectId + " not found!");
    return;
  }
  if (find_Performer(performerId) == undefined) {
    console.log("Error. Customer " + performerId + " not found!");
    return;
  }
  ActiveProjects.push(new ActiveProject(projectId, performerId));
}

//Видалення
function delete_Project(number) {
  Projects = Projects.filter((p) => p.number != number);
}
function delete_Performer(number) {
  Performers = Performers.filter((s) => s.number != number);
}
function delete_Customer(number) {
  Customers = Customers.filter((s) => s.number != number);
}
function delete_ActiveProject(projectId, performerId) {
  ActiveProjects = ActiveProjects.filter(
    (s) => s.projectId != projectId && s.performerId != performerId
  );
}

//Пошук
function find_Project(criteria) {
  return Projects.find(
    (p) =>
      p.name === criteria || p.number === criteria || p.address === criteria
  );
}
function find_Performer(criteria) {
  return Performers.find((s) => s.name === criteria || s.number === criteria);
}
function find_Customer(criteria) {
  return Customers.find((m) => m.number === criteria);
}
function find_all_Projects_on_Customer(customer) {
  return Projects.filter((s) => s.CustomerId == customer.number);
}
function find_all_Project_on_Performer(performer) {
  return ActiveProjects.filter((s) => s.performerId == performer.number);
}

//Редагування
function edit_Project(criteria, id_to_change, value) {
  let t = Projects.find((p) => p.name === criteria || p.number === criteria);
  switch (id_to_change) {
    case 0:
      t.name = value;
      break;
    case 1:
      t.number = value;
      break;
    case 2:
      t.CustomerId = value;
      break;
    default:
  }
}
function edit_Performer(criteria, id_to_change, value) {
  let t = Performers.find((s) => s.name === criteria || s.number === criteria);
  switch (id_to_change) {
    case 0:
      t.name = value;
      break;
    case 1:
      t.number = value;
      break;
    case 2:
      t.companyId = value;
      break;
    default:
  }
}

function edit_Customer(criteria, id_to_change, value) {
  let t = Performers.find(
    (s) =>
      s.name === criteria || s.number === criteria || s.address === criteria
  );
  switch (id_to_change) {
    case 0:
      t.name = value;
      break;
    case 1:
      t.number = value;
      break;
    case 2:
      t.address = value;
      break;
    case 3:
      t.company = value;
      break;
    default:
  }
}

add_Project('Music project',1,1);
add_Project('Math project',2,1);
add_Project('Advertisment project',3,2);

add_Performer('Mykyta',1,1);
add_Performer('Veronika',2,1);
add_Performer('Andrij',3,1);
add_Performer('Bohdana',4,1);

add_Customer("Bohdan",1,1,"Lazarenko 40");

add_ActiveProject(1,1);
add_ActiveProject(2,2);
add_ActiveProject(3,3);


//Вивід
console.log(Projects);
console.log('\n');
console.log(ActiveProjects);
console.log('\n');
console.log(Customers);
console.log('\n');
console.log(Performers);
console.log('\n');
console.log(find_all_Projects_on_Customer(find_Customer(1)));