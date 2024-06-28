#include <iostream>
using namespace std;
//class Student{
//	private:
//		string name;
//		int age,marks;
//	public:
//		Student(string n,int a,int m){
//		    name=n;
//		    age=a;
//		    marks=m;
//		}
//		void display(){
//		   cout<<"Name:"<<name<<" Age:"<<age<<" Marks:"<<marks<<endl;
//	    }
//	    Student(Student &obj){
//	    	name=obj.name;
//	    	age=obj.age;
//	    	marks=obj.marks;
//	    	cout<<"copy constractor";
//		}
//};
//int main(){
//	Student s("Arun",23,98);
//	s.display();
//	Student s1(s);
//	s1.display();
//}
//========================== heap me copy conns====================

class Student{
	private:
		string name;
		int age,*marks;
	public:
		Student(string n,int a,int m){
		    name=n;
		    age=a;
		    marks=new int;
		    *marks=m;
		}
		void display(){
		   cout<<"Name:"<<name<<" Age:"<<age<<" Marks:"<<*marks<<endl;
	    }
	    void change(int a,int m){
	    	*marks=m;
	    	age=a;
		}
	    Student(Student &obj){
	    	name=obj.name;
	    	age=obj.age;
	    	marks=new int;
	    	*marks=*obj.marks;
//	    	cout<<"copy constractor";
		}
};
int main(){
	Student s("Arun",23,98);
	s.display();
	Student s1(s);
	s1.display();
	s1.change(33,100);
	s.display();
	s1.display();
}