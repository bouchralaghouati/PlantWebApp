package fr.laghouati.bouchra.plants.repository;

import fr.laghouati.bouchra.plants.plant.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {
}
