import React, {
  Dimensions,
  StyleSheet
} from 'react-native';


export default class Styles {
  constructor(styles) {
    this.height = Dimensions.get('window').height * Dimensions.get('window').scale;
    if (this.height < 1190) {
     this.style = this.parseStyles(styles, 'small');
    } else if (this.height < 1340) {
     this.style = this.parseStyles(styles, 'middle');
    } else if (this.height > 1340) {
     this.style = this.parseStyles(styles, 'large');
    }

    return (StyleSheet.create(this.style));
  }

  parseStyles(style, sizeName) {
   let sizeStyle = {};

   for (let mainStyleKey in style) {
    let mainStyleItem = style[mainStyleKey];

    if (mainStyleItem.hasOwnProperty('media')) {
     sizeStyle[mainStyleKey] = Object.assign(mainStyleItem, mainStyleItem.media[sizeName]);
     delete sizeStyle[mainStyleKey].media;
    } else {
     sizeStyle[mainStyleKey] = mainStyleItem;
    }
   }
   return sizeStyle;
  }
}
