#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	cout<<" enter a,b,c :";
	cin>>a>>b>>c;
	if(a>b && a>c){
		cout<<a<<" is highest"<<endl;
		if(b>c)
		cout<<b<<" is second highest"<<endl;
		else
		cout<<c<<" is second highest"<<endl;
	}
	else if(b>a && b>c){
		cout<<b<<" is highest"<<endl;
		if(a>c)
		cout<<a<<" is second highest"<<endl;
		else
		cout<<c<<" is second hight"<<endl;
	}
	else{
		cout<<c<<" is highest"<<endl;
		if(b>a)
		cout<<b<<" is second hight"<<endl;
		else
		cout<<a<<" is second hight"<<endl;
	}
}