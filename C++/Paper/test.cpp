
#include <iostream>
using namespace std;
//============================ Friend ======================================
//class MusicAcademy{
//	private:
//		int enroll_no;
//        string name;
//        string style;
//        float fee;
//        void chkfee(){
//        	if(style=="Classical") fee=10000;
//        	else if(style=="Western") fee=8000;
//        	else if(style=="Freestyle") fee=11000;
//		}
//   public:
//   	  MusicAcademy(int e,string n,string s,float f){
//   	  	   		 enroll_no=e;
//                 name=n;
//                 style=s;
//                 fee=f;
//		 }
//	 MusicAcademy(){
//	 	cout<<"Enter Name,Enrollment Number,Style,:";
//	 	cin>>name>>enroll_no>>style;
//	 }
//	 void enrollment(){
//	 	chkfee();
//	 }
//	 void display(){
//	 	cout<<"Name: "<<name<<endl;
//	 	cout<<"Enrollment: "<<enroll_no<<endl;
//	 	cout<<"Style: "<<style<<endl;
//	 	cout<<"Fee "<<fee<<endl;
//
//	 }
//	 friend class ExamMusicAcademy;
//};
//class ExamMusicAcademy{
//	public:
//		void display_month(MusicAcademy &obj){
//	    	if(obj.style=="Classical") cout<<"December"<<endl;
//        	else if(obj.style=="Western") cout<<"november"<<endl;
//        	else if(obj.style=="Freestyle") cout<<"febrary"<<endl;
//        }
//};
//int main(){
//	MusicAcademy m;
//	m.enrollment();
//	m.display();
//	ExamMusicAcademy em;
//	em.display_month(m);
//}
//================================== Highest ==============================
//class Highest{
//	private:
//		int n1,n2,n3,n4;
//	public:
//
//	void highest_number(int no1,int no2,int no3,int no4){
//		        n1=no1;
//		        n2=no2;
//		        n3=no3;
//		        n4=no4;
//		if(n1>n2 && n1>n3 && n1>n4) cout<<"Highest:"<<n1<<endl;
//		else if(n2>n1 && n2>n3 && n2>n4) cout<<"Highest:"<<n2<<endl;
//		else if(n3>n1 && n3>n2 && n3>n4) cout<<"Highest:"<<n3<<endl;
//		else if(n4>n1 && n4>n2 && n4>n3) cout<<"Highest:"<<n4<<endl;
//	}
//	void highest_number(int no1,int no2,int no3){
//		        n1=no1;
//		        n2=no2;
//		        n3=no3;
//		if(n1>n2 & n1>n3) cout<<"Highest:"<<n1<<endl;
//		else if(n2>n1 & n2>n3) cout<<"Highest:"<<n2<<endl;
//		else if(n3>n1 & n3>n2) cout<<"Highest:"<<n3<<endl;
//	}
//};
//int main(){
//	Highest h;
//	h.highest_number(22,339,222);
//	
//}
//============================== Vehicle ==============================
//class Vehicle{	
//	public:
//		virtual void startEngine()=0;  
//		virtual void stopEngine()=0; 
//}; 
//class Car: public Vehicle{
//		void startEngine(){
//		cout<<"Start engine"<<endl;
//	}	
//    	void stopEngine(){
//		cout<<"Start engine"<<endl;
//	}
//};
//class Motorcycle: public Vehicle{
//		void startEngine(){
//		cout<<"Start engine"<<endl;
//	}	
//    	void stopEngine(){
//		cout<<"Start engine"<<endl;
//	}
//};
//int main(){
//	Vehicle *p=new Car;
//	Vehicle *p1=new Motorcycle;
//	p->startEngine();
//	p->stopEngine();
//	p1->startEngine();
//	p1->stopEngine();
//}
//========================== Bank ==============================
//class Bank{
//	private:
//	static int count_customer;
//	public:
//		Bank(){
//			count_customer++;
//		}
//	     static	void displaycount(){
//			cout<<count_customer;
//		}
//};
//int Bank::count_customer=10;
//int main(){
//	Bank b1(10),b2(20);
//	b.displaycount();
//}
//======================== Student =================================
//class Student{
//	private:
//		int marks;
//	public:
//		Student(){
//			cout<<"Enter marks:";
//			cin>>marks;
//		}
//		Student(int m){
//			marks=m;
//		}
//		void display(){
//			cout<<"Marks:"<<marks<<endl;;
//		}
//		Student operator*(Student &obj){
//			Student temp(1),highest;
//			temp.marks=marks*obj.marks;
//			return temp;
//		//	if(marks>obj.marks){
////			highest=marks;
////			return highest;
////	     	}
////			else{
////			highest=obj.marks;
////			return highest;	
////	    	}
//		}
//};
//int main(){
//	Student s1(2),s2(4),s3(3);
//	Student result=s1*s2*s3;
//	result.display();
//	result.highest();
//}
//======================= display A to Z characters =============
//int main(){
//	int n;
//	cout<<"Enter number:";
//	cin>>n;
//	if(n>0){
//		for(char i='A';i<='Z';i++){
//			cout<<i<<" ";
//		}
//	}
//	else if(n<0){
//		for(char i='Z';i>='A';i--){
//			cout<<i<<" ";
//		}
//	}
//	else if(n==0){
//		cout<<"good bye";
//	}
//}
//=========================== Test Question (Flight)==============================

//Q.1>Create a Class Flight with details mention below and make appropriate constructor:
//Data Member: flight_number, departure_city, destination_city, departure_time, price.
//Methods: getFlightDetails(),update_time().
//
//Q.2>Create a Friend Class Passenger of above mention class,  object of Passenger represents a passenger booking a flight.
//Data Member: passenger name.
//Methods: bookFlight() take a reference of Class Flight and a particular passenger can book a flight.
//                  display() display all detail of passenger.

//class Flight{
//	protected:
//		int flight_number,price;
//		string departure_city,destination_city,departure_time;
//	public:
//		Flight(int fly,int pri,string departurecity,string destinationcity,string time){
//			  flight_number=fly;
//			  price=pri;
//			  departure_city=departurecity;
//			  destination_city=destinationcity;
//			  departure_time=time;
//		}
//		void getFlightDetails(){
//			cout<<"Flight Number:"<<flight_number<<endl;
//			cout<<"Price:"<<price<<endl;
//			cout<<"Departure City:"<<departure_city<<endl;
//			cout<<"Destination City:"<<destination_city<<endl;
//			cout<<"Time:"<<departure_time<<endl;
//		}
//		void update_time(string time){
//			departure_time=time;
//		}
//	friend	class Passenger;
//};
//class Passenger{
//	private:
//		string name;
//	public:
//		Passenger(){
//			cout<<"Enter Passenger Name:"<<endl;
//			cin>>name;
//		}
//
//	void bookFlight(Flight &obj){
//		    cout<<"Passenger Name:"<<name<<endl;
//			cout<<"Flight Number:"<<obj.flight_number<<endl;
//			cout<<"Price:"<<obj.price<<endl;
//			cout<<"Departure City:"<<obj.departure_city<<endl;
//			cout<<"Destination City:"<<obj.destination_city<<endl;
//			cout<<"Time:"<<obj.departure_time<<endl;
//	}
//		
//};
//int main(){
//	Flight f(1001,9000,"Bhopal","Indore","10:00 AM");
////	f.getFlightDetails();
////	f.update_time("12:00 AM");
////	f.getFlightDetails();
//	
//	Passenger p;
//	p.bookFlight(f);
//}
//================================= Library  ==============================
//Q.3)Create a class named Library to manage a library catalog,
// Data Member:  book_id, author_name, and category.
// One static data member : book_count
// Methods: display() 
// One static member function : total_books()display total objects been created.

//class Library{
//	protected:
//		int book_id;
//		string author_name,category;
//        static int book_count;
//    public:
//    	Library(int eid,string name,string c){
//    		book_id=eid;
//    		author_name=name;
//    		category=c;
//    		book_count++;
//		}
//	void display(){
//		cout<<"Book ID:"<<book_id<<endl;
//		cout<<"Author Name:"<<author_name<<endl;
//		cout<<"Category"<<category<<endl;
//		}
//	static void total_books(){
//		cout<<"Total Books:"<<book_count<<endl;
//	}
//};
//int Library::book_count;
//int main(){
//	Library l(101,"Arun","English"),l2(102,"Rahul","Maths"),l3(103,"Ritu","Java"),l4(104,"Rohit","Science");
//	l.display();
//	l.total_books();
//}
//================================= Player ===============================
//Q.4) Create  a Abstract class Player having method play() and pause() as pure virtual function.
// Define its related child class where you have to implement this functions . (Music ,Vedio,Game)      

//class Player{
//	public:
//		virtual void play()=0;
//		virtual void pause()=0;
//};
//class Music:public Player{
//	public:
//		void play(){
//			cout<<"Play Music"<<endl;
//		}
//		void pause(){
//			cout<<"Pause Music"<<endl;
//		}
//};
//class Video:public Player{
//	public:
//		void play(){
//			cout<<"Play Video"<<endl;
//		}
//		void pause(){
//			cout<<"Pause Video"<<endl;
//		}
//};
//class Game:public Player{
//	public:
//		void play(){
//			cout<<"Play Game"<<endl;
//		}
//		void pause(){
//			cout<<"Pause Game"<<endl;
//		}
//};
//int main(){
//	Game g;
//	g.play();
//	g.pause();
//    Music m;
//	m.play();
//	m.pause();
//	Video v;
//	v.play();
//	v.pause();
//}
//================================= findMax ======================================

//Q.5) Write two functions with the same name findMax, one that takes two 
//integers and another that takes two doubles , and returns the maximum of the two.

//   void findMax(int a,int b){
//   	     if(a>b)
//   	     cout<<"max number:"<<a<<endl;
//   	     else cout<<"max number:"<<b<<endl;
//   	     cout<<"integer"<<endl;
//   }
//   
//   void findMax(double a,double b){
//   	     if(a>b)
//   	     cout<<"max number:"<<a<<endl;
//   	     else cout<<"max number:"<<b<<endl;
//   	     cout<<"double"<<endl;
//   }
//   int main(){
//   	findMax(23,55);
//   	findMax(23.99,55.95);
//   }
//========================== Ability =====================================
//Q.6) Create a game character system where characters can have various
// abilities (e.g., Jump, Attack, Defend). Create a base class Ability with a virtual
//  function perform(). Implement different abilities as derived classes and 
//  demonstrate how a character can use these abilities through a pointer to the 
//  base class. (child class name JumpAbility,AttackAbility,DefendAbility)

//class Ability{
//	public:
//		virtual void perform(){
//			cout<<"Perform Ability"<<endl;
//		}
//};
//class JumpAbility:public Ability{
//	public:
//		void perform(){
//			cout<<"JumpAmility"<<endl;
//		}
//};
//class AttackAbility:public Ability{
//	public:
//		void perform(){
//			cout<<"AttackAbility"<<endl;
//		}
//};
//class DefendAbility:public Ability{
//	public:
//		void perform(){
//			cout<<"DefendAbility"<<endl;
//		}
//};
//int main(){
//	Ability *p0=new Ability;
//	p0->perform();
//	Ability *p=new JumpAbility;
//	p->perform();
//	Ability *p1=new AttackAbility;
//	p1->perform();
//	Ability *p2=new DefendAbility;
//	p2->perform();
//}
//======================= Paper->2 ===============================
//--------------(multiple of 5 then ignore it.)-------------------
// output: 12 11 9 8 7 6 4 3 2 1 

//int main() {
//    int n;
//    cout<<"Enter a number: ";
//    cin>>n;
//    for(int i=n; i>=1;i--) {
//        if (i%5!=0) {
//            cout<<i<<" ";
//        }
//    }
//}
//---------------(Time->operator overloding)---------------------
//class Time{
//	private:
//		int hours;
//		int mins;
//	public:
//		Time(int h,int m){
//			hours=h;
//			mins=m;
//		}
//	void convert_mins(){
//		cout<<"Total Hours:"<<hours<<endl;
//		cout<<"Total Mins:"<<mins<<endl;
//		cout<<"Equivalent Mins:"<<60*hours+mins<<endl;
//	}
//	void display(){
//		cout<<"Total Hours:"<<hours<<" Total min:"<<mins<<endl;
//	}
//	Time operator+(Time obj){
//		Time temp(0,0);
//		int remain_hour=(mins+obj.mins)/60;
//		temp.hours=(hours+obj.hours)+remain_hour;
//		temp.mins=(mins+obj.mins)%60;
//		return temp;              //  2 ops loop pattarn
//	}
//};
//int main(){
//	Time t1(2,33),t2(3,50);
//	Time Result=t1+t2;
//	Result.display();
//	//t.convert_mins();
//}
 
//----------------------( METROPOLIS )------------------------
//class METROPOLIS{
//	private:
//		int code;
//		string name;
//		int pop;
//		double area;
//		int popdens;
//		
//	void CalDen(){
//		popdens=pop/area;
//	}
//	public:
//		void enter(){
//			cout<<"Enter Code:";
//			cin>>code;
//			cout<<"Enter Name:";
//			cin>>name;
//			cout<<"Enter pop:";
//			cin>>pop;
//			cout<<"Enter Area:";
//			cin>>area;
//			CalDen();
//		}
//		void viewALL(){
//			cout<<"Code:"<<code<<endl;
//			cout<<"Name:"<<name<<endl;
//			cout<<"Pop:"<<pop<<endl;
//			cout<<"Area:"<<area<<endl;
//			if(popdens>12000){
//				cout<<"Highly Populated Area";
//			}
//		}
//};
//int main(){
//	METROPOLIS m;
//	m.enter();
//	m.viewALL();
//}
//---------------------(modify each element)-----------------------
//void FixPay(float pay[], int n){
//	float result;
//	for(int i=0;i<n;i++){
//		if(pay[i]<100000){
//			result=pay[i]*0.25;
//		}
//		else if(pay[i]>=100000 && pay[i]<200000){
//			result=pay[i]*0.20;
//		}
//		else if(pay[i]>=200000){
//			result=pay[i]*0.15;
//		}
//		pay[i]=pay[i]+result;
//	}
//}
//int main(){
//    float ar[]={300000,150000,80000};
//    int s=sizeof(ar)/sizeof(int);
//    FixPay(ar,s);
//    for(int i=0;i<s;i++){
//    	cout<<ar[i]<<" ";
//	}
//}
//---------------(last me 4 Bale num ka sum karna)---------------
//void AddEnd4(int a[],int n){
//	int sum=0;
//	for(int i=0;i<n;i++){
//		if(a[i]%10==4){
//			sum=sum+a[i];
//		}
//	}
//	cout<<sum;
//}
// int main(){
// 	int ar[4]={24 ,16 ,14,10};
// 	AddEnd4(ar,4);
// }
//---------------------------(pattern)---------------------------
//int main(){
//	for(int i=0;i<7;i++){
//		for(int j=0;j<=7;j++){
//			if(j==0 || i==3 || i==6 || i==0)
//			cout<<"*";
//		}
//		cout<<endl;
//	}
//}
//-------------------( exception handling )------------------------
//int main(){
//	int ar[5]={23,44,5,6,7};
//	int n;
//	cout<<"Enter number:";
//	cin>>n;
//	try{
//		if(n>5){
//		   throw n;
//		}
//		else
//			cout<<ar[n]<<" ";
//		}
//	catch(int a){
//		cout<<"index number greater";
//	}
//}

//----------------( palindrome return true false)-------------------
//string pali(string a){
//	string st="";
//	for(int i=a.size()-1;i>=0;i--){
//		st.push_back(a[i]);
//	}
//	if(a==st){
//		cout<<"True";
//	}
//	else{
//		cout<<"false";
//	}
//}
//int main(){
//	string s="abba";
//	string result=pali(s);
//	cout<<result;
//}
//-----------------------( alphabet )------------------------
//int main(){
//	string result;
//	cout<<"Enter input:";
//	cin>>result;
//	if(result=="all"){
//		for(char i='a';i<='z';i++){
//			cout<<i<<" ";
//		}
//	}
//	else if(result=="reverse"){
//		for(char i='z';i>='a';i--){
//			cout<<i<<" ";
//		}
//	}
//	else if(result=="cons"){
//		for(char i='a';i<='z';i++){
//	   if(i=='a'||i=='i'||i=='u'||i=='e'){
//	   	continue;
//	   }
//	   else{
//	   	cout<<i<<" ";
//	   }
//     }
//	}
//	else if(result=="vowel"){
//		for(char i='a';i<='z';i++){
//	   if(i=='a'||i=='i'||i=='u'||i=='e'||i=='o'){
//	   	cout<<i<<" ";
//	   }
//     }
//}
//}
//----------------------- ( pattern ) --------------------------
//int main(){
//	for(int i=1;i<=7;i++){
//		for(int j=1;j<=5;j++){
//			if(i==1||i==7||j==1||j==5||i==4){
//				cout<<"*";
//			}
//			else{
//				cout<<" ";
//			}		
//		}
//		cout<<endl;
//	}
//}
//----------------------(search_palindrome ) ------------------------
//string search_palindrome(string a[],int size){
//	int count;
//	string final;
//	for(int i=0;i<size;i++){
//		string temp=a[i],st="";
//		for(int j=temp.size();j>=0;j--){
//			st.push_back(temp[j]);
//			count++;
//		}
//		if(temp==st){
//			 final=st;
//		}
//	}
//	
//	return final;
//} 
//int main(){
//	string ar[]={"mom","Rahul","raj","nitin"};
//    int size=sizeof(ar)/sizeof(ar[0]);
//    string result=search_palindrome(ar,size);
//    cout<<result;
//}
//------------------------(daimond)---------------------
//class Student{
//	protected:
//		string address;
//	public:
//		Student(string add){
//			address=add;
//		}
//	void display_address(){
//		cout<<"Address :"<<address<<endl;
//	}
//};
//class Teacher{
//	protected:
//		string address;
//	public:
//		Teacher(string add1){
//			address=add1;
//		}
//	void display_address(){
//		cout<<"Address :"<<address<<endl;
//	}
//};
//class Contact:public Teacher,public Student{
//	public:
//		Contact(string add,string add1):Teacher(add),Student(add1){
//		}
//	
//};
//int main(){
//	Contact c("Bhopal","indore");
//	c.Teacher::display_address();
//	c.Student::display_address();
//}
//-------------------------( Employee )-------------------------
//class Employee{
//	public:
//		virtual void calculateSalary()=0;
//		virtual void display()=0;
//};
//class FullTimeEmployee:public Employee{
//	protected:
//		int salary;
//	public:
//		FullTimeEmployee(int s){
//			salary=s;
//		}
//	void calculateSalary(){
//		cout<<salary<<endl;
//	}
//	 void display(){
//		cout<<salary<<endl;
//	}
//};
//class PartTimeEmployee:public Employee{
//	protected:
//		int dailyRate,days_worked;
//		int total_salary;
//	public:
//		PartTimeEmployee(int rate,int days){
//			dailyRate=rate;
//			days_worked=days;
//			
//		}
//	void calculateSalary(){
//		total_salary=dailyRate*days_worked;
//		
//	}
//	void display(){
//		cout<<total_salary<<endl;
//	}
//};
//int main(){
//	Employee *p=new FullTimeEmployee(40000);
//	Employee *p1=new PartTimeEmployee(2000,9);
//	p->calculateSalary();
//	p->display();
//	p1->calculateSalary();
//	p1->display();
//}