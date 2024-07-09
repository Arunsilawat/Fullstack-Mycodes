#include <iostream>
using namespace std;
class Media{
	public:
		virtual void play()=0;
};
class Audio:public Media{
	public:
		void play(){
			cout<<"play music \n";
		}
};

class Video:public Audio{
	public:
		void play(){
			cout<<"play video\n";
		}
};
int main(){
	Media *p= new Audio;
	Media *p1= new Video;
	p->play();
	p1->play();

}

//--------------------------------------------(Employee)------------------------------------------------------
#include <iostream>
using namespace std;

class Employee{
	int eid,year;
	double sal;
	string name,dep;
	public:
		Employee(int id,string n,string dp,int s,int y){
		eid=id;
		year=y;
		sal=s;
		name=n;
		dep=dp;
	}
	void display(){
	    cout<<"Id :"<<eid<<" Name :"<<name<<" Department :"<<dep<<endl;
	    cout<<"Salary :"<<sal<<" Year :"<<year<<endl;
	}
		
};
int main(){
	Employee e(101,"Arun","Hr",50000,6);
    e.display();
}