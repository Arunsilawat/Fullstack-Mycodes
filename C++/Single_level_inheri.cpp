#include <iostream>
using namespace std;
class Persone{
	protected:
		string name;
		int age;
    public:
    	Persone(){
    		cout<<"enter name and age ;";
    		cin>>name>>age;
		}
		Persone(string n,int a){
			name=n;
			age=a;
		}
};
class Employee:public Persone{
	int eid;
	string department;
	public:
		Employee(){
			cout<<"enter eid and department: ";
			cin>>eid>>department;
		}
		Employee(string n,int a,int id,string d):Persone(n,a){
			eid=id;
			department=d;
		}
		void display(){
			cout<<name<<" "<<age<<" "<<eid<<" "<<department;
		}
};

int main(){
	
	Employee e("ajay",23,101,"Hr");
	e.display();
}