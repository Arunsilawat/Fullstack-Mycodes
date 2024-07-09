#include <iostream>
using namespace std;
class Media{
	public:
		virtual void play()=0;
};
class Audio:public Media{
	public:
		void play(){
			cout<<"play music \n";
		}
};

class Video:public Audio{
	public:
		void play(){
			cout<<"play video\n";
		}
};
int main(){
	Media *p= new Audio;
	Media *p1= new Video;
	p->play();
	p1->play();

}