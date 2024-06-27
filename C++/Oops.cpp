#include <iostream>
using namespace std;
//int main(){
//	int a,b,c;
//	cout<<" enter a,b,c :";
//	cin>>a>>b>>c;
//	if(a>b && a>c){
//		cout<<a<<" is highest"<<endl;
//		if(b>c)
//		cout<<b<<" is second highest"<<endl;
//		else
//		cout<<c<<" is second highest"<<endl;
//	}
//	else if(b>a && b>c){
//		cout<<b<<" is highest"<<endl;
//		if(a>c)
//		cout<<a<<" is second highest"<<endl;
//		else
//		cout<<c<<" is second hight"<<endl;
//	}
//	else{
//		cout<<c<<" is highest"<<endl;
//		if(b>a)
//		cout<<b<<" is second hight"<<endl;
//		else
//		cout<<a<<" is second hight"<<endl;
//	}
//}
//----------------------------------------------------------------
//class Person{
//	protected:
//		string name,address;
//	public:
//		Person(string n,string add){
//			name=n;
//			address=add;
//		}
//};
//class Student:public Person{
//	public:
//		Student(string n,string add):Person(n,add){
//		}
//	void dis_student(){
//		cout<<"Student Name :"<<name<<endl;
//		cout<<"Student Address :"<<address<<endl;
//	}
//};
//class Teacher:public Person{
//	public:
//		Teacher(string n,string add):Person(n,add){
//		}
//	void dis_teacher(){
//		cout<<"Teacher Name :"<<name<<endl;
//		cout<<"Teacher Address :"<<address<<endl;
//	}
//};
//int main(){
//	Teacher t("Arun","Bhopal");
//	t.dis_teacher();
//    Student s("Rohit","Indore");
//    s.dis_student();
//}
//--------------------------------------------------------------------
//class Shape{
//	protected:
//		double radius;
//		int length,width;
//};
//class Circle:public Shape{
//	public:
//		Circle(double r){
//			radius=r;
//		}
//	void calculate_area(){
//		cout<<"Area of Circle:"<<3.14*radius*radius<<endl;
//	}
//	void perimeter(){
//		cout<<"Perimeter of Circle:"<<2*3.14*radius<<endl;
//	}
//};
//class Ractangle:public Shape{
//	public:
//		Ractangle(int l,int w){
//			length=l;
//			width=w;
//		}
//	void calculate_area(){
//		cout<<"Area of Ractangle:"<<length*width<<endl;
//	}
//	void perimeter(){
//		cout<<"Perimeter of Ractangle:"<<2*(length+width)<<endl;
//	}
//};
//int main(){
//	Circle c(4.2);
//	c.calculate_area();
//	c.perimeter();
//	Ractangle r(3,2);
//	r.calculate_area();
//	r.perimeter();
//}
//-----------------------------------------------------------------
//class BankAccount{
//	protected:
//		int amount,deposit,withdraw;
//	public:
//
//};
//class SavingsAccount:public BankAccount{
//	public:
//		void check_amount(){
//		 
//			cout<<"Total Amount :"<<amount<<endl;
//		}
//};
//class CheckingAccount:public BankAccount{
//	public:
//		CheckingAccount(){
//			cout<<"Enter Amount:";
//			cin>>amount;
//		}
//		void deposit_amount(){
//			cout<<"Amount:"<<amount<<endl;
//			cout<<"How many amount you want to deposit:";
//			cin>>deposit;
//			amount=amount+deposit;
//			cout<<"Total Amount :"<<amount<<endl;
//		}
//		void withdraw_amount(){
//			cout<<"How many amount you want to withdraw:";
//			cin>>withdraw;
//			amount=amount-withdraw;
//			cout<<"Total Amount :"<<amount<<endl;
//		}
//};
//int main(){
//	CheckingAccount c;
//	c.deposit_amount();
//	c.withdraw_amount();
//	SavingsAccount s;
//	s.check_amount();
//}
//---------------------------------------------------------------
//class Media{
//	public:
//		virtual void play()=0;
//};
//class Video:public Media{
//	public:
//		void play(){
//			cout<<"Play Video"<<endl;;
//		}
//};
//class Audio:public Media{
//	public:
//		void play(){
//			cout<<"Play Audio"<<endl;;
//		}
//};
//int main(){
//	Video v;
//	v.play();
//	Audio a;
//	a.play();
//}
//---------------------------------------------------------------
//class Employee{
//	protected:
//		string name,department;
//	public:
//		Employee(string n,string d){
//			name=n;
//			department=d;
//		}
//	virtual void calculate_salary()=0;
//	virtual void display_all()=0;
//};
//class Manager:public Employee{
//	public:
//		Manager(string n,string d):Employee(n,d){
//		}
//		void calculate_salary(){
//			cout<<"Salary,HRA,Compnay share,DA,Pf"<<endl;
//		}
//		void display_all(){
//			cout<<"Name :"<<name<<endl;
//			cout<<"Department :"<<department<<endl;
//		}
//};
//class Worker:public Employee{
//	public:
//		Worker(string n,string d):Employee(n,d){
//		}
//		void calculate_salary(){
//			cout<<"HRA,Pf,salary"<<endl;
//		}
//		void display_all(){
//			cout<<"Name :"<<name<<endl;
//			cout<<"Department :"<<department<<endl;
//		}
//};
//int main(){
//	Employee *p=new Manager("Arun","HR");
//	Employee *p1=new Worker("Raj","Helper");
//	p->calculate_salary();
//	p->display_all();
//	p1->calculate_salary();
//	p1->display_all();
//}
//----------------------------------------------------------------
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
//		string email;
//		int phone;
//	public:
//		Contact(string e,int p){
//			email=e;
//			phone=p;
//		}
//};
//class Student:public Contact,public Person{
//	public:
//		Student(string n,string a,string e,int p):Person(n,a),Contact(e,p){
//		}
//    void display(){
//    	cout<<"Name :"<<name<<endl;
//    	cout<<"Address :"<<address<<endl;
//    	cout<<"Email :"<<email<<endl;
//    	cout<<"Phone :"<<phone<<endl;
//	}		
//};
//int main(){
//	Student s("Arun","Bhopal","arun@email",23323);
//	s.display();
//}
//-----------------------------------------------------------------
//class Worker{
//	protected:
//		string name;
//		int salary;
//	public:
//		Worker(string n,int s){
//			name=n;
//			salary=s;
//		}
//}; 
//class Contact{
//	protected:
//		string email;
//		int phone;
//	public:
//		Contact(string e,int p){
//			email=e;
//			phone=p;
//		}
//};
//class Manager:public Contact,public Worker{
//	public:
//		Manager(string n,int s,string e,int p):Worker(n,s),Contact(e,p){
//		}
//		void display(){
//			cout<<"Name :"<<name<<endl;
//			cout<<"Salary :"<<salary<<endl;
//			cout<<"Email :"<<email<<endl;
//			cout<<"Phone :"<<phone<<endl;
//		}
//};
//int main(){
//	Manager m("Arun",50000,"arun@email",722381);
//	m.display();
//}
//-----------------------------------------------------------------
//class Shaps{
//	protected:
//		double d1,d2;
//	public:
//		Shaps(double n1){
//			d1=n1;
//		}
//		Shaps(double n1,double n2){
//			d1=n1;
//			d2=n2;
//		}
//	virtual void display(){
//		cout<<"Area calculate here";
//	}
//};
// 
//class Circle:public Shaps{
//	public:
//		Circle(double n1):Shaps(n1){
//		}
//    void display(){
//    	cout<<"Area of Circle :"<<3.14*d1*d1<<endl;
//	}
//};
//class Square:public Shaps{
//	public:
//		Square(double n1):Shaps(n1){
//		}
//	void display(){
//		cout<<"Area of Square :"<<d1*d1<<endl;
//	}
//};
//class Traingle:public Shaps{
//	public:
//		Traingle(double n1,double n2):Shaps(n1,n2){
//		}
//	void display(){
//		cout<<"Area of Traingle :"<<0.5*d1*d2<<endl;
//	}
//};
//int main(){
//	Traingle t(2,4);
//	t.display();
//	Circle c(3);
//	c.display();
//	Square s(2);
//	s.display();
//}
//------------------------------------------------------------------
//class Bank{
//	private:
//		int amount;
//	public:
//		Bank(int a){
//			amount=a;
//		}
//	void addamount(){
//		int n;
//		cout<<"Amount :"<<amount<<endl;
//		cout<<"Enter Amount you want to add:";
//		cin>>n;
//		amount=amount+n;
//		cout<<"Amount :"<<amount<<endl;
//	}
//	void addamount(int a){
//		cout<<"Amount :"<<amount<<endl;
//		int b;
//		b=a;
//		amount=amount+b;
//		cout<<"Amount :"<<amount<<endl;
//	}
//};
//int main(){
//	Bank b(50000);
//	b.addamount();
//	b.addamount(200);
//}
//----------------------------------------------------------------
//class Message{
//	public:
//		void mymessage(){
//			cout<<"I love programming languages"<<endl;
//		}
//		void mymessage(string a){
//			string b;
//			b=a;
//			cout<<b<<endl;
//		}
//};
//int main(){
//	Message m;
//	m.mymessage();
//	m.mymessage("programming languages");
//}
//------------------------------------------------------------------
//class Person{
//	private:
//		string name,country;
//		int age;
//	public:
//		Person(string n,string c,int a){
//			name=n;
//			country=c;
//			age=a;
//		}
//		Person(Person &obj){
//			name=obj.name;
//			country=obj.country;
//			age=obj.age;
//		}
//	void getter(){
//		cout<<"Name :"<<name<<endl;
//		cout<<"Country :"<<country<<endl;
//		cout<<"Age :"<<age<<endl;
//	}
//	void change_age(int n){
//		age=n;
//		cout<<"Age :"<<age<<endl;
//	}
//};
//int main(){
//	Person p("Arun","Bhopal",23);
//	p.getter();
//	p.change_age(30);
//	Person p1(p);
//	p1.getter();
//}
//------------------------------------------------------------------
//class Car{
//	protected:
//		string company,model;
//		int year;
//	public:
//		Car(string c,string m,int y){
//			company=c;
//			model=m;
//			year=y;
//		}
//	void getter(){
//		cout<<"Company :"<<company<<endl;
//		cout<<"Model :"<<model<<endl;
//		cout<<"Year :"<<year<<endl;
//	}
//};
//class CarEngine:public Car{
//	private:
//		string engine_type;
//		int engine_no_of_cylinder;
//	public:
//		CarEngine(string e,int cl,string c,string m,int y):Car(c,m,y){
//			engine_type=e;
//		    engine_no_of_cylinder=cl;
//		}
//	void getter(){
//		cout<<"Company :"<<company<<endl;
//		cout<<"Model :"<<model<<endl;
//		cout<<"Year :"<<year<<endl;
//		cout<<"Engine Type:"<<engine_type<<endl;
//		cout<<"Engin No Of Cylinder:"<<engine_no_of_cylinder<<endl;
//	}
//}; 
//int main(){
//	CarEngine c("new BMW ",1121,"BMW","New Model",2000);
//	c.getter();
//}
//------------------------------------------------------------------
//class Employee{
//	protected:
//		string name,dep,designation,performance;
//		int eid;
//	void setter(){
//		int n;
//		cout<<"What is your performance:\n";
//		cout<<"bad-0,avg-1,good-2,very-good-3,best-4";
//		cin>>n;
//		if(n==0) performance="bad";
//		else if(n==1) performance="avg";
//		else if(n==2) performance="good";
//		if(n==3) performance="very-good";
//		if(n==4) performance="best";
//	}
//	public:
//		Employee(string n,string d,string des,int id){
//			name=n;
//			dep=d;
//			designation=des;
//			eid=id;
//			setter();
//		}
//	void getter(){
//		cout<<"Name :"<<name<<endl;
//		cout<<"Department :"<<dep<<endl;
//		cout<<"Designation :"<<designation<<endl;
//		cout<<"Employee ID :"<<eid<<endl;
//		cout<<"Performance :"<<performance<<endl;
//	}
//};
//class EmpSalary:public Employee{
//	private:
//		int salary,basic,hra,da,pf;
//	public:
//		EmpSalary(int b,int h,int di,int p,string n,string d,string des,int id):Employee(n,d,des,id){
//			basic=b;
//			hra=h;
//			da=di;
//			pf=p;
//			salary=basic+hra+da-pf;
//		}
//	void display_salary(){
//		cout<<"Salary :"<<salary<<endl;
//	}
//	void bonus(){
//		if(performance=="good") salary+=2000;
//		if(performance=="very-good") salary+=2000;
//		if(performance=="best") salary+=2000;
//	}
//};
//int main(){
//	EmpSalary e(50000,5000,3000,2000,"Arun","Hr","Manager",121);
//	e.getter();
//	e.display_salary();
//	e.bonus();
//	e.display_salary();
//}
//--------------------------------------------------------------------
//class Student{
//	private:
//		string name;
//		int clas,roll_number,marks;
//	public:
//	   Student(string n,int c,int roll,int m){
//	   	name=n;
//	   	roll_number=roll;
//	   	clas=c;
//	   	marks=m;
//	   }
//	void calculate_grade(){
//		if(marks>80) cout<<"Grade->A"<<endl;
//		else if(marks>60) cout<<"Grade->B"<<endl;
//		else if(marks>40) cout<<"Grade->C"<<endl;
//		else if(marks<40) cout<<"Grade->D"<<endl;
//	}
//	void display(){
//		cout<<"Name :"<<name<<endl;
//		cout<<"Roll Number :"<<roll_number<<endl;
//		cout<<"Class :"<<clas<<endl;
//		cout<<"Marks :"<<marks<<endl;
//		
//	}
//};
//int main(){
//	Student s("Arun",12,121,78);
//	s.display();
//	s.calculate_grade();
//}
//-------------------------------------------------------------------
//pettern==>
//int main(){
//	for(int i=1;i<=10;i++){
//		for(int j=1;j<=10;j++){
//			if(i==5||j==5||(i==1 && j>5)||(i==10 && j<5)||(j==1 && i<5)||(j==10 && i>5)){
//				cout<<"*";
//			}
//			else{
//				cout<<" ";
//			}
//		}
//		cout<<endl;
//	}
//}
//----------------------------------------------------------------
//int main(){
//	for(int i=1;i<=10;i++){
//		for(int j=1;j<=i;j++){
//		  cout<<"*";
//		}
//		cout<<endl;
//	}
//	for(int i=9;i>=1;i--){
//		for(int j=i;j>=1;j--){
//		  cout<<"*";
//		}
//		cout<<endl;
//	}
//}
//-------------------------------------------------------------------
//int main(){
//	int n;
//	cin>>n;
//	for(int i=n;i>=1;i--){
//		for(int j=1;j<=i;j++){
//			cout<<"*";
//		}
//		cout<<endl;
//	}
//}
//------------------------------------------------------------------
//int main(){
//	int n;
//	cin>>n;
//	for(int i=1;i<=n;i++){
//		for(int j=1;j<=n;j++){
//			if(j<=n-i){
//				cout<<" ";
//			}
//			else{
//				cout<<"*";
//			}
//		}
//		cout<<endl;
//	}
//}
//---------------------------------------------------------------------
//int main(){
//	int n;
//	cin>>n;
//	for(int i=1;i<=n;i++){
//		for(int j=1;j<=i;j++){
//	       cout<<i<<" ";
//		}
//		cout<<endl;
//	}
//}
//-------------------------------------------------------------------
//int main(){
//     int count;
//	for(int i=1;i<=5;i++){
//		for(int j=1;j<=i;j++){
//			cout<<count<<" ";
//			count++;
//		}
//		cout<<endl;
//	}
//}
//-------------------------------------------------------------------
//int main(){
//	int n;
//	cin>>n;
//	for(int i=1;i<=n;i++){
//		for(int j=1;j<=i;j++){
//			if((j+i)%2==0){
//				cout<<" 1";
//			}
//			else{
//				cout<<" 0";
//			}
//		}
//		cout<<endl;
//	}
//}
//-----------------------------------------------------------------
//int main(){
//	int n;
//	cin>>n;
//	for(int i=1;i<=n;i++){
//		for(int j=1;j<=n-i;j++){
//			cout<<" ";
//		}
//		for(int j=1;j<=2*i-1;j++){
//			cout<<"*";
//		}
//		cout<<endl;
//	}
//		for(int i=n;i>=1;i--){
//		for(int j=1;j<=n-i;j++){
//			cout<<" ";
//		}
//		for(int j=1;j<=2*i-1;j++){
//			cout<<"*";
//		}
//		cout<<endl;
//	}
//}
//-----------------------------------------------------------------
//void setvalue(int a[],int n){
//	for(int i=0;i<n;i++){
//		cout<<"Enter data:";
//		cin>>a[i];
//	}
//}
//void display(int a[],int n){
//	for(int i=0;i<n;i++){
//		cout<<a[i]<<" ";
//	}
//}
//void search(int a[],int n){
//	int num;
//	string st;
//	while(1){
//		int flag=0;
//		cout<<"Enter search number:";
//		cin>>num;
//		
//		for(int i=0;i<=n;i++){
//			if(a[i]==num){
//				flag=1;
//				cout<<"Number match index number->"<<i<<endl;
//			}
//		}
//		if(flag==0){
//			cout<<"number not fount";
//		}
//
//	}
//}
//int main(){
//	int size;
//	cout<<"Enter size:";
//	cin>>size;
//	int ar[size];
//	setvalue(ar,size);
//	display(ar,size);
//	search(ar,size);
//}
//----------------------------------------------------------------
//int main(){
//	int arr[2][3]={1,2,3,4,5,6};
//	for(int i=0;i<2;i++){
//		int sum=0;
//		for(int j=0;j<3;j++){
//			sum=sum+arr[i][j];
//			cout<<arr[i][j];
//		}
//		cout<<"sum ="<<sum<<endl;
//		
//	}
//}
//----------------------------------------------------------------
//int main(){
//	string s="nitin";
//	string st="";
//	for(int i=s.size()-1;i>=0;i--){
//		st.push_back(s[i]);
//	}
//	cout<<st<<endl;
//	if(s==st){
//		cout<<"pali";
//	}
//	else{
//		cout<<"not a pali";
//	}
//}
//-----------------------------------------------------------------
// int main(){
// 	string res[5]={"nitin","mom","arun","rohan","sohan"};
// 	string final="";
// 	for(int i=0;i<5;i++){
// 		string temp=res[i],sec="";
// 		for(int j=temp.size()-1;j>=0;j--){
// 			sec.push_back(temp[j]);
// 			if(temp==sec && temp.size()>2){
// 				final=final+temp+" ";
//			 }
//		 }
//	 }
//	 		 cout<<final;
// }
//---------------------------------------------------------------
//int main(){
//	string s="i am arun";
//	s[0]=toupper(s[0]);
//	for(int i=0;i<s.size();i++){
//		if(s[i]==' '){
//			s[i+1]=toupper(s[i+1]);
//		}
//	}
//	cout<<s;
//}
//-------------------------------------------------------------------
#include <iostream>
using namespace std;
int main(){
	int cost,amount;
	float discount;
	cout<<"enter the cost of pen :\n";
	cin>>cost;
	amount=cost;
	if(cost>1000){
		discount=(20/100.0)*amount;
		cout<<"the discount is :"<<discount<<" and the amount to be paid is :"<<amount-discount;
	}
	else{
		discount=(10/100.0)*amount;
		cout<<"the discount is :"<<discount<<" and the amount to be paid is :"<<amount-discount;

	}
	
	
}