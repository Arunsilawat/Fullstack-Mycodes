#include <iostream>
using namespace std;
int main(){
	int a=90,b=99;
	double c=99.99;
	int *p=&a;
	p=&b;
	//p=&c; error
}