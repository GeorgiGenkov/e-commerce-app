FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn -f app/pom.xml clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build app/target/ecommerce-0.0.1-SNAPSHOT.jar ecommerce.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "ecommerce.jar"]