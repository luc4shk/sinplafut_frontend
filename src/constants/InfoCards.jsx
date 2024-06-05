import { Home, Signpost, MapPin,Phone, Layers2} from "lucide-react"

const categories = {
  mayores:"Mayores",
  infantil:"Infantil",
  sub_15:"Sub-15",
  sub_17:"Sub-17",
  sub_20:"Sub-20",
  juvenil:"Juvenil",
}

const categoryFormat = (categoria) =>{
    
    return categories[categoria]
}

export const CLUB_INFO = [
 
  {
    icon: <Home className="bg-gray-100 p-2 rounded-md" size={38} />,
    text: (data)=>data.estadio,
  },
  {
    icon: <Signpost className="bg-gray-100 p-2 rounded-md" size={38} />,
    text: (data)=>data.direccion,
  },
  {
    icon: <MapPin className="bg-gray-100 p-2 rounded-md" size={38} />,
    text: (data)=>data.ciudad
  }
]

export const TEAM_INFO = [
  {
    icon: <Phone className="bg-gray-100 p-2 rounded-md" size={38} />,
    text: (data)=>data.telefono,
  },
  {
    icon: <Layers2 className="bg-gray-100 p-2 rounded-md" size={38} />,
    text: (data)=> categoryFormat(data.categoria),
  },
]
