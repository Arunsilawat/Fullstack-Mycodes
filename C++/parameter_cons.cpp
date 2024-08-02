#include <iostream>
using namespace std;



class Employee{
	public:
		string name;
		int eid,year;
		double salary;
		char gender;
		
		Employee(){  //default
			name="";
			eid=0;
			year=0;
			salary=0;
			gender=' ';
     		cout<<"constructor call";
			
		   cout<<"enter eid,name,salary,gender,year,employee 1 :"<<endl;
           cin>>eid>>name>>salary>>gender>>year;
    	
		}
			Employee(int id,string n,char g,double s,int y){ //parameterized
			eid=id;
			name=n;
			gender=g;
			salary=s;
			year=y;
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
	Employee e1(101,"ajay",'m',9000,5);
	e1.display();
}