import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();


  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( this.geometry, this.material );

  @ViewChild('main')
  mainEl: ElementRef;

  ngOnInit() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.mainEl.nativeElement.appendChild( this.renderer.domElement );

    this.scene.add( this.cube );
    this.camera.position.z = 5;

    this.animate();
  }

  animate = () => {
    requestAnimationFrame( this.animate );
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
  }
  

  

  
  
}
