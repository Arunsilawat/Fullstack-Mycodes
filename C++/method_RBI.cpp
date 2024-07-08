#include <iostream>
using namespace std;
class RBI{
	public:
		virtual void interest()=0; //pure virtual 
		virtual void reporate()=0;
		
		void information(){
			cout<<"Interest rate should be definded by respective bank\n";
		}
};
class SBI:public RBI{
	public:
		void interest(){
			cout<<"SBI interest rate is 5% \n";
		}
		void reporate(){
			cout<<"SBI repo rate is 8% \n";
		}
};

int main(){
	RBI *p=new SBI;
	p->interest();
	p->reporate();
}