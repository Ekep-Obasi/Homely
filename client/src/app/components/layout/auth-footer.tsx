import { Separator } from '../ui/separator'

const link = [
  {
    href: '',
    icon: '',
  },
  {
    href: '',
    icon: '',
  },
  {
    href: 'https://github.com/Ekep-Obasi/Homely',
    icon: '',
  },
]

export default function AuthFooter() {
  return (
    <footer className="w-full">
      <div className="flex justify-between py-5 flex-wrap gap-2 p-5 border-t-2 sm:container">
        <div className="flex gap-5">
          <a className="text-sm text-blue-400 hover:underline" href="/">
            Terms
          </a>
          <Separator orientation="vertical" />
          <a className="text-sm text-blue-400 hover:underline" href="/">
            Privacy
          </a>
        </div>
        <div className="mx-auto p-2">
          {link.map((props) => (
            <a href={props.href}>{props.icon}</a>
          ))}
        </div>
        <a className="text-sm text-slate" href="/">
          Copyright @ 2023. All rights reserved
        </a>
      </div>
    </footer>
  )
}
