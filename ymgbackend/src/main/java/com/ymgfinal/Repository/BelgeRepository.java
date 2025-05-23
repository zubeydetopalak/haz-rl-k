package com.ymgfinal.Repository;

import com.ymgfinal.Entity.Belge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BelgeRepository extends JpaRepository<Belge, Long> {
}
