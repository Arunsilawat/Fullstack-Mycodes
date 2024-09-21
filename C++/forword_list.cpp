#include <iostream>
#include <list>
#include <forward_list>
using namespace std;

/*int main(){
    list<int> lis;
    lis.push_back(12);  //o(1)
    lis.push_back(13);
    lis.push_back(14);
    lis.push_front(11); //o(1)
    lis.pop_back();
    lis.pop_front();
    cout<<lis.front()<<endl; //o(1)
    cout<<lis.back()<<endl; //o(1)
    list<int>:: iterator it=lis.begin();
    for(it=lis.begin();it!=lis.end();it++){
        cout<<*it<<" ";
    }
}*/


int main(){
    list<int> lis {11,12,13,14};
    list<int>:: iterator it1=lis.begin();
    // it1 = it1+5-->not possible (no indexing)
    //it1++;
    //it1++;
    advance(it1,2);
    lis.insert(it1,10);

    list<int>:: iterator it=lis.begin();
    for(it=lis.begin();it!=lis.end();it++){
        cout<<*it<<" ";
    }
}