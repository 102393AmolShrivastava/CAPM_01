using {cuid, managed} from '@sap/cds/common';
namespace com.tcs.hr;

entity Requests: cuid, managed {
    crName: String(100);
    region: String(50);
    subRegion: String(50);
    crDescription: String(100);
}