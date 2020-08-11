import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: string, args: string): string {
    let re : string = "";
    if(args == "MD5")
    {
    for (var i = 0; i < value.length; i++) {
      switch(value.charAt(i).toLowerCase()){
        case "a":
          re += "·-";
          break;
        case "b":
          re += "-···";
          break;
        case "c":
          re += "-·-·";
          break;
        case "d":
          re += "-··";
          break;
        case "e":
          re += "·";
          break;
        case "f":
          re += "··-·";
          break;
        case "g":
          re += "--·";
          break;
        case "h":
          re += "····";
          break;
        case "i":
          re += "··";
          break;
        case "j":
          re += "·---";
          break;
        case "k":
          re += "-·-";
          break;
        case "l":
          re += "·-··";
          break;
        case "n":
          re += "-·";
          break;
        case "m":
          re += "--";
          break;
        case "o":
          re += "---";
          break;
        case "p":
          re += "·--·";
          break;
        case "q":
          re += "--·-";
          break;
        case "r":
          re += "·-·";
          break;
        case "s":
          re += "···";
          break;
        case "t":
          re += "-";
          break;
        case "u":
          re += "··-";
          break;
        case "v":
          re += "···-";
          break;
        case "w":
          re += "·--";
          break;
        case "x":
          re += "-··-";
          break;
        case "y":
          re += "-·--";
          break;
        case "z":
          re += "--··";
          break;
        case "æ":
        case "ä":
        case "ą":
          re += "·-·-";
          break;
        case "ø":
        case "ö":
        case "ó":
          re += "---·";
          break;
        case "å":
        case "à":
          re += "·--·-";
          break;
        case "1":
          re += "·----";
          break;
        case "2":
          re += "··--";
          break;
        case "3":
          re += "···--";
          break;
        case "4":
          re += "····-";
          break;
        case "5":
          re += "·····";
          break;
        case "6":
          re += "-····";
          break;
        case "7":
          re += "--···";
          break;
        case "8":
          re += "---··";
          break;
        case "9":
          re += "----·";
          break;
        case "0":
          re += "-----";
          break;
        case ".":
          re += "·-·-·-";
          break;
        case ",":
          re += "--··--";
          break;
        case ":":
          re += "---···";
          break;
        case "?":
          re += "··--··";
          break;
        case "'":
          re += "·----·";
          break;
        case "-":
          re += "-····-";
          break;
        case "/":
          re += "-··-·";
          break;
        case "(":
          re += "-·--·";
          break;
        case ")":
          re += "-·--·-";
          break;
        case "\"":
          re += "·-··-·";
          break;
        case "\n":
          re += "·-·-";
          break;
        case "*":
          re += "-··-";
          break;
        case "@":
          re += "·--·-·";
          break;
        default:
          re += "·";
          break;
      }
      re += " ";
    }
  }
  else
  {
    re = String(Md5.hashAsciiStr(value, true));
  }
    return re;
  }

}
