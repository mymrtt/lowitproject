import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import ButtonsGrafico from './ButtonsGrafico';

class GraficoConsumo extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
          {
            label: 'Hora',
            data:[
              20,
              25,
              30,
              20,
              50,
              40,
              20,
              30,
              10,
              30,
              20,
              60
            ],
            backgroundColor: '#00717F'  
          },
          {
            label: 'Dia',
            data:[
              30,
              25,
              15,
              40,
              35,
              45,
              20,
              10,
              15,
              10,
              20,
              60
            ],
            backgroundColor: '#00717F'  
          },
          {
            label: 'Mês',
            data:[
              40,
              50,
              80,
              25,
              20,
              30,
              70,
              120,
              50,
              30,
              45,
              50
            ],
            backgroundColor: '#00717F'
          },
          {
            label:  'Ano',
            data:[
              100,
              150,
              200,
              300,
              100,
              120,
              350,
              240,
              140,
              80,
              100,
              200
            ],
            backgroundColor: '#00717F'
          }
        ]
      }
    }
  }

  static defaultProps = {
    // displayTitle:true,
    // displayLegend: true,
    // legendPosition:'right',
  }

  render(){
    return (
      <div className="container_grafico">
        <div className="container_grafico-conteudo">
          <div className="container_buttonsGrafico">
            <input className="input_grafico" type="text" value="Sala de vídeo" />
            <div className="buttonsGrafico">
              <ButtonsGrafico value="Hora" backgroundColor='Grey'/>
              <ButtonsGrafico value="Dia" backgroundColor='Grey'/>
              <ButtonsGrafico value="Mês" backgroundColor='Grey'/>
              <ButtonsGrafico value="Ano" backgroundColor='Grey'/>
            </div>
          </div>
          <div style={{ width: '95%', height: '100%', backgroundColor: '#fff', justifyContent: 'flex-end', borderRadius: '8px' }}>
            <h3 className="grafico_consumo-texto">Consumo</h3>
            <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={600} height={240} />
            <p className="grafico_demanda-textos">Mês</p>
          </div>
        </div>
      </div> 
    )
  }
}

export default GraficoConsumo;