#include <iostream>
using namespace std;
 
 class A{
 	private:
 	void f1(){
 		cout<<"this is a fuction of class A";
	 }
	 public: f2(){
	 	f1();
	 }
 };
 int main(){
 	A obj1;
 	obj1.f2();
 }