import '../../styles/globals.css'

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
        <header>
          <h1>Paella Jam</h1>
        </header>
      <main>{children}</main>
    </>
  )
}
