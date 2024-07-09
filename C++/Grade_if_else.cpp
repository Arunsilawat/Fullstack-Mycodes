#include <iostream>
using namespace std;
int main(){
	int marks;
	cout<<"enter marks :";
	cin>>marks;
	if(marks<25) cout<<" Grade : ( F )";
	else if(marks<45) cout<<" Grade : ( D )";
	else if(marks<50) cout<<" Grade : ( C )";
	else if(marks<60) cout<<" Grade : ( B )";
    else
    cout<<" Grade : ( A )";
}