#include <iostream>
using namespace std;
//class Cybrom{
//	public:
//		string st_name,course;
//		static string institude_name;
//	public:
//		Cybrom(string n,string c){
//			st_name=n;
//			course=c;
//		}
//		void display(){
//			cout<<"Institude Name :"<<institude_name<<endl;
//			cout<<"Name :"<<st_name<<endl;
//			cout<<"Course :"<<course<<endl;
//		}
//};
//string Cybrom::institude_name="Cybrom academy";
//int main(){
//	Cybrom obj1("raj","python FS"),obj2("Arun","Java");
//	obj1.display();
//	obj2.display();
////	obj1.institude_name="RGPV"; //unhealthy coding 
//    Cybrom::institude_name="Cybrom Infotech";
//    obj1.display();
//	obj2.display();
//}

//============================================================
class Cybrom{
	private:
		string st_name,course;
		static string institude_name;
		static string univercity_name;
		static string address;
	public:
		Cybrom(string n,string c){
			st_name=n;
			course=c;
		}
		void display(){
			cout<<"Institude Name :"<<institude_name<<endl;
			cout<<"Name :"<<st_name<<endl;
			cout<<"Course :"<<course<<endl;
		}
	    static void change(string n,string a){
		   institude_name=n;
		   address=a;
		   cout<<"Address :"<<address;
		}
		void display2(){
			cout<<"Univercity Name :"<<univercity_name<<endl;
		}
};
string Cybrom::univercity_name="RGPV";
string Cybrom::institude_name="Cybrom academy";
string Cybrom::address="Bhopal ";
int main(){
	Cybrom obj1("raj","python FS"),obj2("Arun","Java");
	obj1.display();
	obj2.display();
	obj1.display2();
//	obj1.institude_name="RGPV"; //unhealthy coding 
    Cybrom::change("Cybrom Infotech","Indore");
    obj1.display();
	obj2.display();
}