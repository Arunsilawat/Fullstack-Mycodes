#include <iostream>
using namespace std;

//dimond problime ko two tpye se solve karte hai (priincriment ,post ++a.a++)

//class A{
//	public:
//		void f1(){
//			cout<<"this is f1() of class A\n";
//		}
//};
//class B:virtual public A{
//	public:
//		void f2(){
//			cout<<"this is f2() of class B\n";
//		}
//};
//class C:virtual public A{
//	public:
//		void f3(){
//			cout<<"this is f3() of class C\n";
//		}
//};
//class D:public C,public B{
//	public:
//		void f4(){
//			cout<<"this is f4() of class D\n";
//		}
//};
//int main(){
//	D obj;
//	obj.f1();
//	obj.f2();
//	obj.f3();
//	obj.f4();
//}
//==================== Person =========================
//class Person{
//	protected:
//		string name,address;
//};
//class Student:public Person{
//	public:
//		Student(string n,string add){
//			name=n;
//			address=add;
//		}	
//	virtual	void display(){
//			cout<<"Student Name :"<<name<<endl;
//			cout<<"Address :"<<address<<endl;
//		}
//};
//class Teacher:public Person{
//	public:
//		Teacher(string n,string add){
//			name=n;
//			address=add;
//		}
//		void display(){
//			cout<<"Teacher Name :"<<name<<endl;
//			cout<<"Address :"<<address<<endl;
//		}       
//};
//int main(){
//	Teacher t("Arun","Bhopal");
//	Student s("sumit","vidisha");
//	t.display();
//	s.display();
//}
//========================= Shape ============================
//class Shape{
//	protected:
//		double radius;
//		int length,breadth;	
//};
//class Circle:public Shape{
//	public:
//		Circle(double r){
//			radius=r;
//		}
//		void calculate_area(){
//			cout<<"Area of circle:"<<3.14*radius*radius<<endl;
//		} 
//		void perimeter(){
//			cout<<"Perimeter of circle:"<<2*3.14*radius<<endl;
//		}
//};
//class Rectangle:public Shape{
//	public:
//		Rectangle(int l,int b){
//			length=l;
//			breadth=b;
//		}
// 
//		void display_area(){
//			cout<<"Area of ractangle:"<<length*breadth<<endl;
//		}
//		void display_perimeter(){
//			cout<<"Perimeter of ractangle:"<<2*(length+breadth)<<endl;
//		}
//};
//int main(){
//	Rectangle r(2,4);
//	Circle c(4);
//	r.display_area();
//	r.display_perimeter();
//	c.calculate_area();
//	c.perimeter();
//} 

//======================= BankAccount =======================
//class Bankaccount{
//	protected:
//		int amount,deposit,withdraw;
//	public:
//		Checkingaccount(int a,int d,int w){
//			amount=a;
//			deposit=d;
//			withdraw=w;
//		}
//};
//class Checkingaccount:public Bankaccount{
//	public:
//	Checkingaccount(int a,int d,int w):Bankaccount(a,d,w)
//	void check(){
//			cout<<"Total Amount:"<<amount+deposit-withdraw;
//		}
//};
//class Savingsaccount:public Checkingaccount{
//	public:
//	Savingsaccount(int a,int d,int w):Checkingaccount(a,d,w){
//		}
//		void bankdetail(){
//			cout<<"Amount :"<<amount<<endl;
//			cout<<"Deposit:"<<deposit<<endl;
//			cout<<"Deposit:"<<withdraw<<endl;
//		}
//};
//
//int main(){
//	Savingsaccount s(1000,50,20);
//	s.bankdetail();
//	s.check();
//}

//============= polimorphism Employee pure virtual ==========
//class Employee{
//	protected:
//		string name,department;
//	public:
//		Employee(string n,string d){
//			name=n;
//			department=d;
//		}
//		virtual void calculatesalary()=0;
//		virtual void displaydetail()=0;
//		void information(){
//			cout<<"Salary of manager and worker ";
//		}
//};
//class Manager:public Employee{
//	public:
//		Manager(string n,string d):Employee(n,d){
//		}
//		void displaydetail(){
//			cout<<"Name :"<<name<<endl;
//			cout<<"Department: "<<department<<endl;
//		}
//		void calculatesalary(){
//			cout<<"Salary+HRA+company shares+park\n";
//		}
//};
//
//class Worker:public Manager{
//	public:
//		Worker(string n,string d):Manager(n,d){
//		}
//		void displaydetail(){
//			cout<<"Name :"<<name<<endl;
//			cout<<"Department: "<<department<<endl;
//		}
//		void calculatesalary(){
//			cout<<"Salary+HRA\n";
//		}
//};
//int main(){
//	Employee *p1= new Manager("Arun","HR");
//	Employee *p2= new Worker("Raj","helper");
//	p1->displaydetail();
//	p1->calculatesalary();
//	p2->displaydetail();
//	p2->calculatesalary();
//}
//======================= Person =========================
//class Person{
//	protected:
//		string name,address;
//	public:
//		Person(string n,string a){
//			name=n;
//			address=a;
//		}
//};
//class Contact{
//	protected:
//	   int phone;
//	   string email;
//	   public:
//	     Contact(int p,string e){
//	     	  phone=p;
//	     	  email=e;
//		 } 
//};
//class Student:public Contact,public Person{
//	  public:
//	  	Student(string n,string a,int p,string e):Person(n,a),Contact(p,e){
//		  }
//	  	void display(){
//	  		cout<<"Name:"<<name<<endl;
//	  		cout<<"Address:"<<address<<endl;
//	  		cout<<"Phone:"<<phone<<endl;
//	  		cout<<"Email:"<<email<<endl;
//		  }
//};
//int main(){
//	Student s("Arun","Bhopal",333,"ar@email");
//	s.display();
//}
//=================== Worker and contact =======================
//class Worker{
//	protected:
//		string name;
//		int salary;
//	public:
//		Worker(string n,int s){
//		  name=n;
//		  salary=s;
//        }
//};
//class Contact{
//	protected:
//		string address;
//		string email;
//	public:
//		Contact(string a,string e){
//		  address=a;
//		  email=e;
//	}
//};
//class Manager:public Worker,public Contact{
//	public:
//		Manager(string n,int s,string a,string e):Worker(n,s),Contact(a,e){
//		}
//	void display(){
//		cout<<"Name :"<<name<<endl;
//		cout<<"Salary :"<<salary<<endl;
//		cout<<"Address :"<<address<<endl;
//		cout<<"Email :"<<email<<endl;
//	}
//		  
//};
//int main(){
//	Manager m("Arun",50000,"Bhopal","ar@gmail");
//	m.display();
//}
//====================== shape circle triangle squre ========================
//class Shapes{
//	protected:
//		int d1,d2;
//	public:
//		Shapes(int a){
//			d1=a;
//		}
//		Shapes(int a,int b){
//			d1=a;
//			d2=b;
//		}
//	virtual void calculate_area(){
//		cout<<"Area calculated here";
//	}
//};
//class Circle:public Shapes{
//	public:
//		Circle(int a):Shapes(a){
//		}
//	 void calculate_area(){
//		cout<<3.141*d1*d1<<endl;
//	}	
//};
//class Triangle:public Shapes{
//	public:
//		Triangle(int a,int b):Shapes(a,b){
//		
//		}
//	 void calculate_area(){
//		cout<<0.5*d1*d2<<endl;
//	}
//};
//class Squere:public Shapes{
//	public:
//		Squere(int a):Shapes(a){
//		
//		}
//	 void calculate_area(){
//		cout<<d1*d1<<endl;
//	}
//};
//int main(){
//	Circle c(4);
//	c.calculate_area();
//	Squere s(3);
//	s.calculate_area();
//	Triangle t(4,5);
//	t.calculate_area();
//}
//=========================array form me ===========================
//class Shapes{
//	protected:
//		double d1,d2;
//	public:
//		Shapes(int a){
//			d1=a;
//		}
//		Shapes(int a,int b){
//			d1=a;
//			d2=b;
//		}
//	virtual void calculate_area(){
//		cout<<"Area calculated here";
//	}
//};
//class Circle:public Shapes{
//	public:
//		Circle(int a):Shapes(a){
//		}
//	 void calculate_area(){
//		cout<<"Area of Circle:"<<3.141*d1*d1<<endl;
//	}	
//};
//class Triangle:public Shapes{
//	public:
//		Triangle(int a,int b):Shapes(a,b){
//		
//		}
//	 void calculate_area(){
//		cout<<"Area of Triangle:"<<0.5*d1*d2<<endl;
//	}
//};
//class Squere:public Shapes{
//	public:
//		Squere(int a):Shapes(a){
//		
//		}
//	 void calculate_area(){
//		cout<<"Area of Squere:"<<d1*d1<<endl;
//	}
//};
//int main(){
//     Shapes *C=new Circle(5);
//     Shapes *T=new Triangle(5,10);
//     Shapes *S=new Squere(5);
//     
//      Shapes *Ar[3]={C,T,S};
//      for(int i=0;i<3;i++){
//      	Ar[i]->calculate_area();
//	  }
//}
//=======================animal dog ======================
//class Animal{
//	protected:
//	public:
//	
//		virtual void makeSound(){	
//		}
//		virtual void move(){	
//		}
//};
//class Dog:public Animal{
//	public:
//	    void makeSound(){
//			cout<<"Make Sound of Dog"<<endl;
//		}
//		void move(){
//			cout<<"Move of Dog"<<endl;
//		}
//};
//class Cat:public Animal{
//	public:
//		 void makeSound(){
//			cout<<"Make Sound of Cat"<<endl;
//		}
//	    void move(){
//			cout<<"Move of Cat"<<endl;
//		}
//};
//int main(){
////	Animal *a=new Dog;
////	a.makeSound();
////	a.move();
////	
////	Animal *c=new Cat;
////	c.makeSound();
////	c.move();
//   Cat c;
//   c.makeSound();
//   c.move();
//   Dog d;
//   d.makeSound();
//   d.move();
//}
//========================= Employee ===========
//class Employee{
//	protected:
//		string name;
//		int eid;
//	public:
//		Employee(string n,int id){
//			name=n;
//			eid=id;
//		}
//	virtual void display(){
//	}
//};
//class Manager:public Employee{
//	public:
//		Manager(string n,int id):Employee(n,id){
//		}
//	 void display(){
//		cout<<"Name:"<<name<<endl;
//		cout<<"ID:"<<eid<<endl;
//	}
//};
//class Engineer:public Employee{
//	public:
//		int salary;
//		Engineer(string n,int id,int s):Employee(n,id){
//			salary=s;
//		}
//		
//	 void display(){
//		cout<<"Name:"<<name<<endl;
//		cout<<"ID:"<<eid<<endl;
//		cout<<"Salary:"<<salary<<endl;
//	}
//};
//int main(){
//	Manager m("Pawan",101);
//	m.display();
//	Engineer e("Arun",105,50000);
//	e.display();	
//}
//============================= Bank saving acc========
//class BankAccount{
//	protected:
//		int balance;
//	public:
//		BankAccount(int bal){
//			balance=bal;
//		}
//	virtual void deposit()=0;
//	virtual void withdrawal()=0;
//	virtual void display()=0;
//};
//class SavingAccount:public BankAccount{
//	public:
//		SavingAccount(int bal):BankAccount(bal){   
//		}
//		void deposit(){
//			int amount;
//	    	cout<<"Enter How Many Money Want To deposit:";
//	    	cin>>amount;
//			balance=balance+amount;
//		}
//		void withdrawal(){
//			int amount;
//	    	cout<<"Enter How Many Money Want To withdraw:";
//	    	cin>>amount;
//			balance=balance-amount;
//		}
//		void display(){
//			cout<<"Balance:"<<balance<<endl;
//		}
//};
//class CheckingAccount:public BankAccount{
//	public:
//		CheckingAccount(int bal):BankAccount(bal){   
//		}
//		void deposit(){
//			int amount;
//	    	cout<<"Enter How Many Money Want To deposit:";
//	    	cin>>amount;
//			balance=balance+amount;
//		}
//		void withdrawal(){
//			int amount;
//	    	cout<<"Enter How Many Money Want To withdraw:";
//	    	cin>>amount;
//			balance=balance-amount;
//		}
//		void display(){
//			cout<<"Balance:"<<balance<<endl;
//		}
//};
//int main(){
//	SavingAccount s(70000);
//	s.deposit();
//	s.deposit();
//	s.withdrawal();
//	s.display();
//   CheckingAccount c(50000);
//   c.deposit();
//   c.display();
//   c.withdrawal();
//   c.display();
//}
//================================ operators ==============================
//class Complex{
//	protected:
//		int n1,n2;
//	public:
//		Complex(int no1,int no2){
//			n1=no1;
//			n2=no2;
//		}
//	void display(){
//		cout<<n1<<"+"<<n2<<"i"<<endl;
//	}
//};
//int main(){
//	Complex c(23,33);
//	c.display();
//}