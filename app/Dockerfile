FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn -f app/pom.xml clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build app/target/app-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]