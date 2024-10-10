package runtrail.dev.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import runtrail.dev.backend.entity.SkuEntity;

import java.util.List;

@Repository
public interface SkuRepository extends JpaRepository<SkuEntity, Long> {
    List<SkuEntity> findBySkuName(String skuName);

    @Query("SELECT s FROM SkuEntity s " +
            "JOIN s.spu spu " +
            "JOIN spu.category c " +
            "WHERE c.id = :categoryId OR c.parentId = :categoryId")
    List<SkuEntity> findSkusByCategoryOrParent(@Param("categoryId") Long categoryId);


}
