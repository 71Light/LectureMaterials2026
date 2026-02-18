package com.example.yarnfullstackdemo.Controller;

import com.example.yarnfullstackdemo.Model.Yarn;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/yarns")
public class YarnController {

    private final List<Yarn> yarnBasket;

    public YarnController() {
        this.yarnBasket = new ArrayList<>();
    }

    // CREATE
    @PostMapping
    public ResponseEntity<Yarn> addYarn(@RequestBody Yarn yarn) {
        yarnBasket.add(yarn);
        return new ResponseEntity<>(yarn, HttpStatus.CREATED);
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<Yarn>> getAllYarns() {
        return ResponseEntity.ok(yarnBasket);
    }

    // READ BY INDEX
    @GetMapping("/{index}")
    public ResponseEntity<Yarn> getYarn(@PathVariable int index) {
        if (index < 0 || index >= yarnBasket.size()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(yarnBasket.get(index));
    }

    // UPDATE
    @PutMapping("/{index}")
    public ResponseEntity<Yarn> updateYarn(@PathVariable int index, @RequestBody Yarn updatedYarn) {
        if (index < 0 || index >= yarnBasket.size()) {
            return ResponseEntity.notFound().build();
        }

        yarnBasket.set(index, updatedYarn);
        return ResponseEntity.ok(updatedYarn);
    }

    // DELETE
    @DeleteMapping("/{index}")
    public ResponseEntity<Void> deleteYarn(@PathVariable int index) {
        if (index < 0 || index >= yarnBasket.size()) {
            return ResponseEntity.notFound().build();
        }

        yarnBasket.remove(index);
        return ResponseEntity.noContent().build();
    }
}
