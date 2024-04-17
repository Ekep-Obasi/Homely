'use client'

import * as React from 'react'
import { Check, Search } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { Command, CommandEmpty, CommandGroup, CommandItem } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'
import { Input } from '../ui/input'
import { useAppStore } from '@/app/store'

interface ISearchBoxProps {
  onSelectAddress?: (address: string, latitude: number | null, longitude: number | null) => void
  defaultValue: string
}

export default function MapSearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const libraries: Libraries = ['places']

  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  if (!isLoaded) return <div>Loading</div>
  if (loadError) return <div>Error loading</div>

  return <ReadySearchBox onSelectAddress={onSelectAddress} defaultValue={defaultValue} />
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue })

  const [open, setOpen] = React.useState(false)
  const { setLocation } = useAppStore((s) => s)
  const handleSelect = async (address: any) => {
    setValue(address, false)
    clearSuggestions()

    const result = await getGeocode({ address })
    const { lat, lng } = await getLatLng(result[0])
    setLocation({ latitude: lat, longitude: lng })
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full flex justify-end bg-opacity-0" asChild>
        <Button aria-expanded={open} className="flex items-center text-white">
          <span>Search Location</span>
          <Search className="ml-2 h-4 w-4 shrink-0 text-xl opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-1/2 mx-auto p-0">
        <Command className="border-none">
          <Input
            className="w-full flex justify-between border-none outline-none ring-0"
            placeholder="Search Places..."
            disabled={!ready}
            onChange={(e: any) => {
              setValue(e.target.value)
            }}
          />
          <CommandEmpty>No Location found!</CommandEmpty>
          <CommandGroup>
            {status === 'OK' &&
              data?.map(({ place_id, description }) => (
                <CommandItem key={place_id} onSelect={handleSelect} className="w-full">
                  <Check className={cn('mr-2 h-4 w-4', value === description ? 'opacity-100' : 'opacity-0')} />
                  {description}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
