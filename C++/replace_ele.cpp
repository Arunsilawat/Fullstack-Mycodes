
#include <iostream>
using namespace std;
int main(){
	string st="apple is good ";
	string st1="this is our python class";
	
	st.replace(6,2,"are");
	st1.replace(12,6,"c++");
	
	cout<<st1<<endl;
	cout<<st; 

}