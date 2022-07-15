import React,{useState,useEffect} from "react"
import '@grapecity/spread-sheets-designer-resources-cn';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
import '@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import "@grapecity/spread-sheets-tablesheet";
import "@grapecity/spread-sheets-barcode";
import "@grapecity/spread-sheets-charts";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-languagepackages";
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-pdf";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-resources-zh";
import "@grapecity/spread-sheets-designer-resources-cn";
import {Designer} from '@grapecity/spread-sheets-designer-react';
import "@grapecity/spread-sheets-resources-zh"
import GC from "@grapecity/spread-sheets"
GC.Spread.Common.CultureManager.culture('zh-cn')



export default function OnlineDesigner(){
    const [designer,setDesigner] = useState(null)
    const initDesigner = (entity) => {
        setDesigner(entity)
        let spread = entity.getWorkbook()
        let sheet = spread.getActiveSheet()
        sheet.setValue(0,0,'Grapecity')
    }
    return(
        <>
            <Designer
                styleInfo={{height:'98vh'}}
                designerInitialized={initDesigner}
            ></Designer>
        </>
        
    )
}