package demtoolapi.cyborgapi.models;

import jakarta.validation.constraints.*;

public class Enhancement {
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(max = 150, message = "Name must be at most 150 characters")
    private String name;

    private String description;

    @Size(max = 50, message = "Type must be at most 50 characters")
    private String type;

    @Size(max = 150, message = "Manufacturer must be at most 150 characters")
    private String manufacturer;
    private Long cyborgId; // Foreign Key reference to Cyborg

    public Enhancement(Long id, String name, String description, String type, String manufacturer, Long cyborgId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.manufacturer = manufacturer;
        this.cyborgId = cyborgId;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }

    public Long getCyborgId() { return cyborgId; }
    public void setCyborgId(Long cyborgId) { this.cyborgId = cyborgId; }
}
