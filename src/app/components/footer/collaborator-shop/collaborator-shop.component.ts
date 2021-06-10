import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-collaborator-shop',
  templateUrl: './collaborator-shop.component.html',
  styleUrls: ['./collaborator-shop.component.css']
})
export class CollaboratorShopComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    
    //Creo una variable con las coordenadas que quiero mostrar en el centro y el zoom que mostrará
    let shopsMap = L.map('shopsMap').setView([41.377510, 2.087310], 11);
    
    //Le añado la capa del mapa
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        //En el id también podríamos poner 'mapbox/satellite-v9' para ver el mapa por satélite
        id: 'mapbox/streets-v11',
        //Como esta API devuelve 512x512 de tamaño de mosaico (tile) por defecto, en lugar de 256x256,  
        //tendremos que especificar esto explícitamente y compensar nuestro zoom con un valor de -1.
        tileSize: 512,
        zoomOffset: -1,
        //Este token lo he copiado de la página www.mapbox.com
        accessToken: 'pk.eyJ1Ijoic2FuYXJ2YSIsImEiOiJja2dxZjE5dGMwNGltMzFvYmpjY2xwamd3In0.WoOqdse4Q1UvHBFkG8qG8w'
    }).addTo(shopsMap)

    let markerGuaubiSabi = L.marker([41.374513, 2.092421]).addTo(shopsMap);
    markerGuaubiSabi.bindPopup(`<b>Guaubi Sabi</b><br> Tienda Online<br>644 057 800`).openPopup();

  }
}
 