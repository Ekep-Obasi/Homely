import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { useDataStore } from '../store'
import { listingTypes } from '../types/listing'

export type OptionsList = {
  label: string
  value: listingTypes
}

interface dropDownProps {
  label?: string
  placeholder?: string | React.ReactNode
  options: OptionsList[]
  styles?: string
}

export function DropDown(props: dropDownProps) {
  const { listingQueries, setListingQueries } = useDataStore()
  return (
    <Select onValueChange={(value) => setListingQueries({ ...listingQueries, type: value })}>
      <SelectTrigger  className={props.styles}>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.options.map(({ value, label }) => (
            <SelectItem key={value} value={value} >
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
