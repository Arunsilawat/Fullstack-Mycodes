#include <iostream>
using namespace std;
int main(){
	int len,br,side;
	cout<<"enter length and breadth of a ractangle :\n";
	cin>>len>>br;
	cout<<"enter side of a square :\n";
	cin>>side;
	int area1,area2;
	area1=len*br; area2=side*side;
	if(area1>area2)
	cout<<"The area of ractangle is greater ";
	else
	cout<<"The area of square is greater ";
	
}