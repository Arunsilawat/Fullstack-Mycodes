#include <iostream>
using namespace std;

class Swap{
	private: int n1,n2;
    public:
    	Swap(int a,int b){
    		n1=a;
    		n2=b;
		}
		void disply(){
			cout<<n1<<" ";
			cout<<n2<<endl;
		}
		void swap(){
			int temp;
			temp=n1;
			n1=n2;
			n2=temp;
		}
};
int main(){
	Swap s(22,33);
	s.disply();
	s.swap();
	s.disply();
}