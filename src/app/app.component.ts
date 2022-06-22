import {Component} from '@angular/core';
import {Web3Service} from "./services/contract/web3.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticated: boolean = false;
  data: string = '';
  accounts: any;
  mintNft: any;


  constructor(
    private web3: Web3Service) {
  }


  async Connect() {
    const res = await this.web3.connectAccount();
    this.data = res === undefined ? '' : res[0];
    this.authenticated = true;
  }

  async MintNFT() {
    console.log('minting ...')
    const response = await this.web3.mintNft();
    console.log(response);
  }
}
