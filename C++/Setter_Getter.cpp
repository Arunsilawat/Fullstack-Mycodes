#include <iostream>
using namespace std;

class Employee{
	private:
		string name,dep,des,performance;
		int eid;
		
		void set_performance(){
			int n;
			cout<<"enter any given number\n";
			cout<<"bad-0 ,avg-1 ,good-2 ,verygood-3 ,excellent-4\n";
			cin>>n;
			if(n==0)
			performance="bad";
			else if(n==1)
			performance="avg";
			else if(n==2)
			performance="good";
			else if(n==3)
			performance="very good";
			else if(n==4)
			performance="excellent";
		}
		public:
			void setter(){
				cout<<"enter eid,name,dep,des :\n";
				cin>>eid>>name>>dep>>des;
				set_performance();
			}
			void getter(){
				cout<<"eid : "<<eid<<" Name :"<<name<<endl;
				cout<<"department :"<<dep<<" designation :"<<des<<endl;
				cout<<"yearly performance "<<performance;
			}
};
int main(){
	Employee e;
	e.setter();
	e.getter();
}