package fr.laghouati.bouchra.plants.plant;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * An entity class represents a table in a relational database
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "plant")


public class Plant {
    @Id
    private Integer id;
    private String name;
    private Integer height;
    private LocalDate potChange;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @Enumerated(EnumType.STRING) // Enregistre la valeur sous forme de texte dans la base
    private Type type;
    public enum Type {
        INTERIEUR,
        EXTERIEUR
    }
}
