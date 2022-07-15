import React,{useState,useEffect} from "react"
import '@grapecity/spread-sheets-resources-zh';
import GC from '@grapecity/spread-sheets'
import {SpreadSheets,Worksheet} from '@grapecity/spread-sheets-react'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013lightGray.css'
GC.Spread.Common.CultureManager.culture("zh-cn");


export default function OnlineSpread(){
    const [spread,setSpread] = useState(null)
    const initSpread = (entity) => {
        setSpread(entity)
        let sheet = entity.getActiveSheet()
        sheet.setValue(0,0,'Grapecity')
    }
    return(
        <>
            <SpreadSheets 
                hostStyle={{height:'98vh'}}
                workbookInitialized={initSpread}
            ></SpreadSheets>
        </>
        
    )
}