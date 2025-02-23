// Instance
import { axiosInstance } from "./instance";

export const getPlanets = async (params: TGetPlanetsParams = { page: 1, order: "asc" }) => {
    try {
        const queryParams = new URLSearchParams();

        // Datos específicos que queremos obtener
        queryParams.append("data", "id,englishName,alternativeName,meanRadius,avgTemp,gravity,sideralOrbit,sideralRotation,moons");
        
        // Paginación (10 items por página)
        queryParams.append("page", `${params.page},10`);

        // Ordenamiento por nombre
        queryParams.append("order", `englishName,${params.order}`);

        // Búsqueda por nombre
        if (params.search) queryParams.append("filter[]", `englishName,cs,${params.search}`);

        const { data } = await axiosInstance.get(`/bodies?${queryParams.toString()}`);
        return data?.bodies;
    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
};

export const getPlanet = async (id: string) => {
    try {
        const { data } = await axiosInstance.get(`/bodies/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching planet ${id}:`, error);
        throw error;
    }
};