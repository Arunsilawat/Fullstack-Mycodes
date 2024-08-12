#include <iostream>
#include <fstream>
using namespace std;
//============single charater read=======
// int main(){
//    ifstream obj;
//      obj.open("new.txt");
//      string st;
//      char ch=obj.get();
//      cout<<ch;
//      ch=obj.get();
//      cout<<ch;
//  }
//==================getlin se puri string read karege ===========
int main(){
	ifstream obj;
	obj.open("new1.txt");
	string st;
	getline(obj,st);
	//=end of file function =====eof()
	while(!obj.eof()){
		getline(obj,st);
		cout<<st<<endl;
	}
}