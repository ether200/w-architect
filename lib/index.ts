import { gql } from "@apollo/client";

export interface ContactInfo {
  contacto: {
    Titulo: string;
    Descripcion: string;
    Email: string;
    Telefono: string;
    Curriculum: string;
    Imagen: [
      {
        url: string;
      }
    ];
  };
}

export const GET_CONTACT_INFO = gql`
  query getContact {
    contacto {
      Titulo
      Descripcion
      Email
      Telefono
      Curriculum
      Imagen {
        url
      }
    }
  }
`;

export interface ServiceInfo {
  Descripcion: string;
  Imagen: {
    url: string;
  };
  Titulo: string;
  id: string;
}

export interface ServiceInfoData {
  servicios: ServiceInfo[];
}

export const GET_SERVICES_INFO = gql`
  query getServices {
    servicios {
      id
      Titulo
      Imagen {
        url
      }
      Descripcion
    }
  }
`;

export interface WorkPreviewInfo {
  Slug: string;
  Titulo: string;
  id: string;
  Poster: {
    url: string;
  };
}

export interface WorkPreviewInfoData {
  trabajos: WorkPreviewInfo[];
}

export const GET_WORKPREVIEW_INFO = gql`
  query getWorks {
    trabajos {
      id
      Titulo
      Slug
      Poster {
        url
      }
    }
  }
`;

export interface WorkImages {
  url: string;
}

export interface SingleWorkInfo {
  id: string;
  Slug: string;
  Titulo: string;
  Descripcion: string;
  Ciudad: string;
  M2: string;
  Year: string;
  Imagenes: WorkImages[];
}

export interface SingleWorkInfoData {
  trabajos: SingleWorkInfo[];
}

export const GET_SINGLEWORK_SLUG = gql`
  query getWorks {
    trabajos {
      Slug
    }
  }
`;

export const GET_SINGLEWORK = gql`
  query getTrabajo($slug: String!) {
    trabajos(where: { Slug: $slug }) {
      Titulo
      Descripcion
      Ciudad
      M2
      Year
      Imagenes {
        url
      }
    }
  }
`;
