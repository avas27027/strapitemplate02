import React, { useEffect, useState } from 'react'
import { Field, Combobox, ComboboxOption } from '@strapi/design-system'
import useSWR from "swr";
import { request } from '@strapi/helper-plugin'

const fetcher = async () => {
    return await fetch("/api/size-refs", { method: "GET" })
        .then(res => {
            if (res.status !== 200) {
                throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
            }
            return res;
        }).then((res) => res.json())
        .then(res => {
            return res.data as Array<{ attributes: { uniqueSizeName: string } }>
            //return res.data[0].attributes.colorName as string
        })

}
const SizePickerInput = ({ attribute, name, onChange }: any) => {
    const { data, error, isLoading } = useSWR("current-colors", fetcher)
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <Field >
            <Combobox label={name} loading={isLoading} placeholder="Elija..." hasMoreItems 
            onChange={(val:any) =>
                onChange({ target: { name, value: val, type: attribute.type } })
              }>
                {data && data.map((x, i) => {
                    return <ComboboxOption value={x.attributes.uniqueSizeName}>{x.attributes.uniqueSizeName}</ComboboxOption>
                })}
            </Combobox>
        </Field>
    )
}


export default SizePickerInput

