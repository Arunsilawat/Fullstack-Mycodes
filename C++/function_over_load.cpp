
#include <iostream>
using namespace std;

void add(int a,int b){
	cout<<"addition :"<<a+b<<endl;
}

void add(int a,int b,int c){
	cout<<"addition :"<<a+b+c<<endl;
}
void add(double a,int b){
	cout<<"addition :"<<a+b<<endl;
}
int main(){
	add(4,5);       //link------->void add (int,int):
	add(44,52,89); //link------->void add (int,int,int):
	add(49.99,50); //link------->void add (double,int):
}