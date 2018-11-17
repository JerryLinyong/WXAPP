import React from 'react';
import { ScrollView, Text, View, TouchableNativeFeedback } from 'react-native';
import { Tabs } from 'antd-mobile-rn';

const renderContent = (tab: any, index: any) => {
  function getColor(){ var colorElements = "1,2,3,4,5,6,7,8,9,a,b,c,d,e"; var colorArray = colorElements.split(","); var color ="#"; for(var i =0;i<6;i++){ color+=colorArray[Math.floor(Math.random()*14)]; } return color;}
  const content = ['一楼','二楼'].map(i => {
    let randomColor = getColor()
    return (
      <View key={`${index}_${i}`}>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>{i}</Text>
        <View style={{marginVertical: 4,flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{backgroundColor: randomColor,padding: 10,borderRadius: 10,width:'48%'}}>
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
                <Text style={{fontSize: 20,fontWeight: 'bold', color: 'white'}}>{'牡丹包厢'}</Text>
                <Text style={{color: 'yellow'}}>{'45'}</Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
                <Text style={{color: 'white'}}>{'2分钟前'}</Text>
                <Text style={{color: 'white'}}>{'点菜'}</Text>
            </View>
          </View>
          <View style={{backgroundColor: randomColor,padding: 10,borderRadius: 10,width:'48%'}}>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
              <Text style={{fontSize: 20,fontWeight: 'bold', color: 'white'}}>{'牡丹包厢'}</Text>
              <Text style={{color: 'yellow'}}>{'45'}</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',padding: 4}}>
              <Text style={{color: 'white'}}>{'2分钟前'}</Text>
              <Text style={{color: 'white'}}>{'点菜'}</Text>
          </View>
        </View>
      </View>
    </View>
    );
  });
  return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};


export default class BasicTabsExample extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  render() {
    let renderTab = (x)=> {
      return(
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#64b5f6',true)}
          onPress={()=>{this.setState({
            page: x.index
          })}}
          >
          <View style={{width:'100%',height:'100%',justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>{x.title}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
    
    const tabs1 = [
      { title: '全部',index:0 },
      { title: '一楼大厅',index:1 },
      { title: '二楼大厅',index:2 },
    ];
    return (
      <View style={{ flex: 1 }}>
          <Tabs tabs={tabs1} initialPage={0} tabBarPosition="top" page={this.state.page} renderTab={renderTab}>
            {renderContent}
          </Tabs>
      </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
