#include <iostream>
using namespace std;



class Employee{
	public:
		string name;
		int eid,year;
		double salary;
		char gender;
		
		Employee(){
			name="";
			eid=0;
			year=0;
			salary=0;
			gender=' ';
     		cout<<"constructor call";
		}
		
		void display(){
			cout<<"employee id :"<<eid<<endl;
			cout<<"name :"<<name<<endl<<"year of service :"<<year<<endl;
			cout<<"salary :"<<salary<<endl<<"gender :"<<gender<<endl;		
		}
	
	    void promotion(){
	    	if(year>5){
	    		cout<<"congrats u got a promotion\n";
	    		salary+=10000;//salary=salary+10000
	    		cout<<"now ur salary is:"<<salary<<endl;
			}
			else{
				cout<<"sorry\n";
			}
		}
		 
};

int main(){
	Employee e1,e2,e3;
	e1.display();
}
//===============================================================
//	Employee e1,e2;
//	cout<<"enter eid,name,salary,gender,year,employee 1 :"<<endl;
//	cin>>e1.eid>>e1.name>>e1.salary>>e1.gender>>e1.year;
//	
//	cout<<"enter eid,name,salary,gender,year,employee 2 :"<<endl;
//	cin>>e2.eid>>e2.name>>e2.salary>>e2.gender>>e2.year;
//		
//	cout<<"employee 1 promotion details :";
//	e1.display();
//	e1.promotion();
//	
//	cout<<"employee 2 promotion details :";
//	e2.display();
//	e2.promotion();